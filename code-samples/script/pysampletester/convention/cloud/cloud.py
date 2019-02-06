import testenv
import os
import re

class PythonSamplesEnvironment(testenv.BaseTestEnvironment):
  def __init__(self, path: str):
    super().__init__('PythonSamplesEnvironment')
    self.path = path
    self.sample_rpc_paths = {}
    for api_dir in os.listdir(path):
      api_path = os.path.join(path,api_dir) # ...../googleapis/artman-genfiles/python/my-language-v1
      if not os.path.isdir(api_path):
        continue
      versioned_api = os.path.basename(api_path)  # my-language-v1
      parts = versioned_api.split('-')
      version_str = parts.pop() # v1
      api_str = '-'.join(parts) # my-language
      api_name = ''.join([word.capitalize() for word in parts])  # MyLanguage
      samples_rpc_dir = os.path.join(api_path, 'samples','google', 'cloud', '_'.join([api_str, version_str]), 'gapic') # ...../googleapis/artman-genfiles/python/my-language-v1/samples/google/cloud/my-language_v1/gapic
      key = 'Google.Cloud.{}.{}'.format(api_name, version_str) # Google.Cloud.MyLanguage.v1
      if len(os.listdir(samples_rpc_dir)) > 0:
        self.sample_rpc_paths[key] = samples_rpc_dir

  def get_call(self, *args, **kwargs):
    service, version, rpc, sample, full_call, cli_arguments = process_call(args, kwargs)
    if not service:
      artifact = full_call
    else:
      lang = 'Python'
      key = '{}.{}'.format(service, version)
      if key not in self.sample_rpc_paths:
        raise ValueError('could not resolve call "{}": directory for "{}" not found'.format(full_call, key))

      sample_path=os.path.join(self.sample_rpc_paths[key], camel_to_lower_snake(rpc),sample+".py")
      interpreter = 'python3'
      artifact = '{} {}'.format(interpreter, sample_path)
    command_line = '{} {}'.format(artifact, cli_arguments)
    return command_line

  def id(self):
    """
    Returns a unique ID for this processor instance
    """
    return 'google-cloud:python:' + self.path

  def name(self):
    return self.id()

# from https://stackoverflow.com/a/1176023
first_cap_re = re.compile('(.)([A-Z][a-z]+)')
all_cap_re = re.compile('([a-z0-9])([A-Z])')
def camel_to_lower_snake(input):
  s1 = first_cap_re.sub(r'\1_\2', input)
  return all_cap_re.sub(r'\1_\2', s1).lower()


class NoLangSamples:
  def get_call_mapper(self):
    def call_mapper(call: Call):
      raise ValueError('this should not have been reached')
    return call_mapper

  def id(self):
    return "nolang"

class CloudRepos:
  def __init__(self):
    self.lang_processor = {
        'python': PythonSamplesEnvironment,
    }
    self.repos = {}
    self.get_langs_and_repos(user_paths or [os.getcwd()])

  def get_langs_and_repos(self, api_dirs):
    """
    For each element of api_dirs, registers each recognized sample repository
    that it finds under the language in which it is implemented.
    """
    for directory in api_dirs:
      self.get_artman_sample_dirs(directory)
    if len(self.repos) == 0:
      self.repos['nolang'] = NoLangSamples()
    for id, handler in self.repos.items():
      register_test_environment(handler)

  def get_artman_sample_dirs(self, api_path):
    if not 'artman-genfiles' in os.listdir(api_path):
      return
    artman_path = os.path.join(api_path,'artman-genfiles')
    for lang_dir in os.listdir(artman_path):
      lang_path = os.path.join(artman_path, lang_dir)
      if not os.path.isdir(lang_path):
        continue
      lang = os.path.basename(lang_path)
      if not lang in self.lang_processor:
        continue
      processor = self.lang_processor[lang](lang_path)
      self.repos[processor.id()] = processor

def process_call(all_args, kwargs):
  """
  The call is invoked as: ARTIFACT KWARGS POSITIONAL_KW_ARGS POSITIONAL_ARGS

  Args:
    args: List of arguments that comprise the actual call. The zeroth arg is
      the generic artifact name (see class description). Subsequent args are
      positional args.
    kwargs: Named arguments. Note that arguments whose names begin with an
      underscore (`_`) are treated specially as "positional kw" args: they are
      sorted, and then their values only are insertedas positional arguments
      before the normal positional arguments.
  """
  all_args=list(all_args)
  args = all_args[1:]
  full = all_args[0]
  service = None
  version = None
  rpc = None
  sample=None

  # parse the call into parts
  call_parts = full.split(':')
  if len(call_parts) > 2:
    raise ValueError('cannot parse call "{}"'.format(full))

  if len(call_parts) == 2:
    # Service[.Subservice ...].Version.RPC:sample
    sample = call_parts[1]
    rpc_parts = call_parts[0].split('.')
    if len(rpc_parts) > 0:
      rpc = rpc_parts.pop()
    if len(rpc_parts) > 0:
      version = rpc_parts.pop()
    if len(rpc_parts) > 0:
      service = '.'.join(rpc_parts)

  full_call, cli_args = testenv.process_args(*all_args, **kwargs)
  return service, version, rpc, sample, full_call, cli_args


cloud_repos = CloudRepos()
