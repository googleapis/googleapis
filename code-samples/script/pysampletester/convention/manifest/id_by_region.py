import testenv
import glob
from typing import Iterable
from sample_manifest import Manifest

LANGUAGE_KEY = 'language'
BINARY_KEY = 'bin'
REGION_KEY='region_tag'

class ManifestEnvironment(testenv.BaseTestEnvironment):
  """Sets up a manifest-derived BaseTestEnvironment for a single language.

  All artifacts with the same LANGUAGE_KEY are grouped in an instance of this
  class. Artifacts may also have a BINARY_KEY to denote how to run the artifact,
  if it is not executable.
  """

  def __init__(self, name: str, manifest: Manifest, indices: Iterable[str]):
    super().__init__(name)
    self.manifest = manifest
    self.const_indices = indices

  def get_call(self, *args, **kwargs):
    full_call, cli_args = testenv.process_args(*args, **kwargs)

    if '.' in full_call:
      artifact = full_call
    else:
      indices = self.const_indices.copy()
      indices.extend(full_call.split(' '))
      try:
        artifact = self.manifest.get_one(*indices) # wrap exception?
      except Exception as e:
        raise Exception('object "{}" not defined: {}'.format(indices, e))
      try:
        bin = artifact.get(BINARY_KEY, '')
        artifact = ' '.join([bin,artifact['path']])
      except Exception as e:
        raise Exception('object "{}" does not contain "path": {}'.format(indices, e))
    return '{} {}'.format(artifact, cli_args)



class LanguageRegionManifestEnvironmentProvider:
  def __init__(self, manifest_paths):
    all_manifests = []
    for path in manifest_paths:
      all_manifests.extend(glob.glob(path))  # can do this?: _ = [a_m.extend(g.g(path)) for path in manifest_paths]
    self.manifest = Manifest(LANGUAGE_KEY,REGION_KEY)
    self.manifest.read_files(*all_manifests)
    self.manifest.index()
    self.languages = self.manifest.get_keys()
    self.resolver={}
    for language in self.languages:
      name = '{} region resolver'.format(language)
      resolver = ManifestEnvironment(name, self.manifest, [language])
      self.resolver[language] = resolver
      register_test_environment(resolver)


resolver = LanguageRegionManifestEnvironmentProvider(user_paths)
