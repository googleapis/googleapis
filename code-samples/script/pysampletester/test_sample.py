#!/usr/bin/env python3

# pip install pyyaml

# https://docs.python.org/3/library/functions.html#exec
# https://pyyaml.org/wiki/PyYAMLDocumentation

# run with "manifest" convention (still need to change sample.manifest to a real manifest of the test samples; this fails at the moment because of that):
#  ./test_sample.py convention/manifest/ex.language.test.yaml convention/manifest/ex.language.manifest.yaml
#
# run with "cloud" convention:
#   ./test_sample.py convention/cloud/cloud.py convention/cloud/ex.language.test.yaml testdata/googleapis
#   ./test_sample.py convention/cloud/cloud.py convention/cloud/ex.product_search_test.yaml testdata/googleapis

import logging
import os
import string
import sys
import testcase
import yaml

import testenv

default_convention='convention/manifest/id_by_region.py'

usage_message = """\nUsage:
{} TEST.yaml [CONVENTION.py] [TEST.yaml ...] [USERPATH ...]

CONVENTION.py is one of `convention/manifest/id_by_region.py` (default) or
   `convention/cloud/cloud.py`

USERPATH depends on CONVENTION. For `id_by_region`, it should be a path to a
   `MANIFEST.manifest.yaml` file.
""".format(os.path.basename(__file__))

def main():
  logging.basicConfig(level=logging.INFO)
  logging.info("argv: {}".format(sys.argv))
  __abs_file__ = os.path.abspath(__file__)
  __abs_file_path__ = os.path.split(__abs_file__)[0]

  convention_files, test_files, user_paths = read_args(sys.argv)
  if not convention_files or len(convention_files) == 0:
    convention_files = [os.path.join(__abs_file_path__, default_convention)]

  environment_registry = testenv.from_files(convention_files, user_paths)

  test_suites = gather_test_suites(test_files)

  logging.info("envs: {}".format(environment_registry.get_names()))

  SUITE_ENABLED="enabled"
  SUITE_SETUP="setup"
  SUITE_TEARDOWN="teardown"
  SUITE_NAME="name"
  SUITE_SOURCE="source"
  SUITE_CASES="cases"
  CASE_NAME="name"
  CASE_SPEC="spec"

  run_passed = True
  for environment in environment_registry.list():
    environment.setup()

    for suite_num, suite in enumerate(test_suites):
      if not suite.get(SUITE_ENABLED, True):
        continue
      setup = suite.get(SUITE_SETUP, "")
      teardown = suite.get(SUITE_TEARDOWN, "")
      suite_name = suite.get(SUITE_NAME,"")
      print("\n==== SUITE {}:{}:{} START  ==========================================".format(environment.name(), suite_num, suite_name))
      print("     {}".format(suite[SUITE_SOURCE]))
      suite_passed = True
      for idx, case in enumerate(suite[SUITE_CASES]):
        this_case = testcase.TestCase(environment, idx,
                                      case.get(CASE_NAME, "(missing name)"),
                                      setup,
                                      case.get(CASE_SPEC,""),
                                      teardown)
        suite_passed &=this_case.run()
      if suite_passed:
        print("==== SUITE {}:{}:{} SUCCESS ========================================".format(environment.name(), suite_num, suite_name))
      else:
        print("==== SUITE {}:{}:{} FAILURE ========================================".format(environment.name(), suite_num, suite_name))
      print()
      run_passed &= suite_passed

    environment.teardown()

  if not run_passed:
    exit(-1)

# cf https://docs.python.org/3/library/argparse.html
def read_args(argv):
  convention_files = []
  test_files = []
  user_paths = []
  for filename in argv[1:]:
    filepath = os.path.abspath(filename)
    if os.path.isdir(filepath):
      user_paths.append(filepath)
      continue

    ext_split = os.path.splitext(filename)
    ext = ext_split[-1]
    if ext == ".py":
      convention_files.append(filepath)
    elif ext == ".yaml":
      prev_ext = os.path.splitext(ext_split[0])[-1]
      if prev_ext == ".manifest":
        user_paths.append(filepath)
      else:
        test_files.append(filepath)
    else:
      msg = 'unknown file type: "{}"\n{}'.format(filename, usage_message)
      logging.critical(msg)
      raise ValueError(msg)
  return convention_files, test_files, user_paths

def gather_test_suites(test_files):

  # TODO(vchudnov): Append line number info to aid in error messages
  # cf: https://stackoverflow.com/a/13319530
  all_suites = []
  for filename in test_files:
    logging.info('Reading test file "{}"'.format(filename))
    with open(filename, 'r') as stream:
      spec = yaml.load(stream)
      these_suites = spec["test"]["suites"]
      for suite in these_suites:
        suite["source"] = filename
      all_suites.extend(these_suites)
  return all_suites


#  eval(spec["test"]["case"])

if __name__== "__main__":
  main()
