import io
import logging
from typing import Iterable
import os.path
import yaml

class Manifest:
  """Maintains a manifest of auto-generated sample artifacts.

  A manifest is a list of artifacts (read from one or more external sources,
  such as files or arrays). Each artifact on the list is associated with any
  number of labels. An artifact can be any value, but in our application is a
  filepath to a sample. It is possible for more than one artifact to share the
  same set of labels.

  A label contains a "label name" (a name of some category) and a "label value"
  (the value within that category). Neither values nor names need to be
  pre-defined.

  A manifest can be "indexed" by any number of labels. This is done by
  specifying the label name corresponding to the index keys. Look up by index
  (ie label value for the indexed label names) is O(1). Look up by a non-index
  key (label name/value pairs for non-indexed labels) is O(n) in the number of
  labels.

  For simplicity, we refer to the sequence of index label values (order
  determined by which the label names were configured) as the "keys", and the
  unordered list of un-indexed label name/value pairs as "filters".

  A typical look-up involves specifying the keys and filters.
  """

  VERSION_KEY = "version"
  SETS_KEY = "sets"
  ELEMENTS_KEY = "__items__"


  def __init__(self, *indices: str):
    """Initializes manifest.

    Args:
      indices: An optional list of labels by which to index the manifest read in
        from various sources
    """
    self.interpreter = {"1": self.index_source_v1}

    # tags[key1][key2]...[keyn] == [metadata, metadata, ...]
    # eg with self.indices == ["language", "region_tag"]:
    #    tags["python"]["analyze_sentiment"] = [ sentiment_john_meta, sentiment_mary_meta ]
    self.tags = {}

    # sources is a list of (name, parsed-yaml, interpreter) tuples, set by
    # read_sources() and used by index()
    self.sources=[]

    self.set_indices(*indices)

  def set_indices(self, *indices: str):
    self.indices = indices or [None]

  def read_files(self, *files: str):
    self.read_sources(files_to_yaml(*files))

  def read_strings(self, *sources: str):
    self.read_sources(strings_to_yaml(*sources))

  def read_sources(self, sources):
    """Reads a sample manifest.

    Args:
      sources: An iterable of (name, manifest) pairs. Here, `manifest` is a dict
        with a key `VERSION_KEY` and with the other keys structured as expected
        by the interpreter for the version specified as the value of
        `VERSION_KEY`.

    Returns:
      the list of sources successfully read
    """
    err_no_version = []
    err_no_interpreter = []
    sources_read = []
    for name, manifest in sources:
      logging.info('reading manifest "{}"'.format(name))
      if not manifest:
        continue
      sources_read.append(name)

      version = manifest.get(self.VERSION_KEY)
      if version is None:
        err_no_version.append(name)
        continue
      interpreter = self.interpreter.get(str(version))
      if not interpreter:
        err_no_interpreter.append(name)
        continue
      self.sources.append((name, manifest, interpreter))

    error = []
    if len(err_no_version) > 0:
      error.append('no version specified in manifest sources: "{}"'
                   .format('", "'.join(err_no_version,)))
    if len(err_no_interpreter) > 0:
      error.append('invalid version specified in manifest sources: "{}"'
                   .format('", "'.join(err_no_interpreter)))
    if len(error) > 0:
      error_msg = 'error reading manifest data:\n {}'.format('\n'.join(error))
      logging.error(error_msg)
      raise Exception(error_msg)
    return sources_read

  def index(self):
    """ Indexes all the items in self.sources using the appropriate interpreter"""
    self.tags = {}
    for name, manifest, interpreter in self.sources:
      try:
        interpreter(manifest)
      except Exception as e:
        logging.error('error parsing manifest source "{}": {}'.format(name, e))
        raise


  def index_source_v1(self, input):
    max_idx = len(self.indices) - 1

    for sample_set in input.get(self.SETS_KEY):

      # get the tag defaults/prefixes for this set
      set_values = sample_set.copy()
      set_values.pop(self.ELEMENTS_KEY, None)

      all_elements = sample_set.get(self.ELEMENTS_KEY, [])
      for element in all_elements:
        # add the needed defaults/prefixes to this element
        for key, value in set_values.items():
          element[key] = value + element.get(key, "")

        # store
        tags = self.tags
        for idx_num, idx_key in enumerate(self.indices):
          idx_value = element.get(idx_key, "")
          tags = get_or_create(tags,idx_value, [] if idx_num == max_idx else {})
        tags.append(element)

        logging.info('read "{}"'.format(element))

  #TODO: add test
  def get_keys(self, *specified_keys):
    """ Returns the keys at the next level after specified_keys have been resolved"""

    if self.indices == [None]: # no indices
      return None
    if len(specified_keys) >= len(self.indices) - 1:
      return None
    tags = self.tags
    for idx in range (0, len(specified_keys)):
        tags = tags[keys[idx]]
    return list(tags.keys())

  def get(self, *keys, **filters):
    """Returns the list of artifacts associated with these keys and filters"""
    keys = keys or [None]
    try:
      tags = self.tags
      for idx in range(0, len(self.indices)):
        tags = tags[keys[idx]]
      return[element for element in tags if all(tag_filter in element.items() for tag_filter in filters.items())]
    except Exception as e:
      return None

  def get_one(self, *keys, **filters):
    """Returns the single artifact associated with these keys and filters, or None otherwise"""
    values = self.get(*keys, **filters)
    if values is None or len(values) != 1:
      return None
    return values[0]


def get_or_create(d, key, empty_value):
  value = d.get(key)
  if value is None:
    value = empty_value
    d[key] = value
  return value


def files_to_yaml(*files: str):
  """ Reads sample manifests from files."""
  for name in files:
    with open(name, 'r') as stream:
      manifest = yaml.load(stream)
    yield (name, manifest)

def strings_to_yaml(*sources: str):
  """ Reads sample manifests from strings."""
  for data in sources:
    manifest = yaml.load(data)
    yield (name, manifest)
