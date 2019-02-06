#!/usr/bin/env python3
import unittest
import sample_manifest

class TestManifest(unittest.TestCase):


  def test_read_no_version(self):
    manifest_source = self.get_manifest_source()
    manifest_source[0][1].pop('version')
    manifest = sample_manifest.Manifest('language', 'region_tag')
    with self.assertRaises(Exception):
      manifest.read_sources([manifest_source])


  def test_read_invalid_version(self):
    manifest_source = self.get_manifest_source()
    manifest_source[0][1]['version'] = "foo"
    manifest = sample_manifest.Manifest('language', 'region_tag')
    with self.assertRaises(Exception):
      manifest.read_sources(manifest_source)

  def test_get_(self):
    manifest_source, expect_alice, expect_bob, expect_carol, expect_dan = self.get_manifest_source()

    manifest = sample_manifest.Manifest('language','region_tag')
    manifest.read_sources([manifest_source])
    manifest.index()

    self.assertEqual([expect_alice], manifest.get('python','alice'))
    self.assertEqual([expect_alice], manifest.get('python','alice', canonical='trivial'))
    self.assertEqual([expect_alice], manifest.get('python','alice', path=expect_alice['path']))
    self.assertEqual([], manifest.get('python','alice', foo='bar'))

    self.assertEqual([expect_bob], manifest.get('python','robert'))
    self.assertEqual([expect_bob], manifest.get('python','robert', tag='guide'))
    self.assertEqual([expect_bob], manifest.get('python','robert', path=expect_bob['path']))

    self.assertEqual([expect_carol], manifest.get('','math', path=expect_carol['path']))
    self.assertEqual([expect_dan], manifest.get('','math', path=expect_dan['path']))

    self.assertIsNone(manifest.get('foo','alice'))

    math = list(manifest.get('','math'))
    for x in [expect_carol, expect_dan]:
      math.remove(x)
    self.assertEqual(0, len(math))

  def test_get_one(self):
    manifest_source, expect_alice, expect_bob, expect_carol, expect_dan = self.get_manifest_source()

    manifest = sample_manifest.Manifest('language', 'region_tag')
    manifest.read_sources([manifest_source])
    manifest.index()

    self.assertEqual(expect_alice, manifest.get_one('python','alice'))
    self.assertEqual(expect_alice, manifest.get_one('python','alice', canonical='trivial'))
    self.assertEqual(expect_alice, manifest.get_one('python','alice', path=expect_alice['path']))
    self.assertIsNone(manifest.get_one('python','alice', foo='bar'))

    self.assertEqual(expect_bob, manifest.get_one('python','robert'))
    self.assertEqual(expect_bob, manifest.get_one('python','robert', tag='guide'))
    self.assertEqual(expect_bob, manifest.get_one('python','robert', path=expect_bob['path']))

    self.assertEqual(expect_carol, manifest.get_one('','math', path=expect_carol['path']))
    self.assertEqual(expect_dan, manifest.get_one('','math', path=expect_dan['path']))

    self.assertIsNone(manifest.get_one('foo','alice'))

    self.assertIsNone(manifest.get_one('','math'))


  def get_manifest_source(self):
    manifest= {
        sample_manifest.Manifest.VERSION_KEY: 1,
        sample_manifest.Manifest.SETS_KEY: [
            {
                "language": "python",
                "path": "/home/nobody/api/samples/",
                sample_manifest.Manifest.ELEMENTS_KEY: [
                    {
                        "path": "trivial/method/sample_alice",
                        "region_tag": "alice",
                        "canonical": "trivial"
                    },
                    {
                        "path": "complex/method/usecase_bob",
                        "region_tag": "robert",
                        "tag": "guide"
                    }
                ]
            },
            {
                "path": "/tmp/",
                sample_manifest.Manifest.ELEMENTS_KEY: [
                    {
                        "path": "newer/carol",
                        "region_tag": "math"
                    },
                    {
                        "path": "newest/dan",
                        "region_tag": "math"
                    }
                ]
            }
        ]
    }

    expect_alice = { 'path': '/home/nobody/api/samples/trivial/method/sample_alice', 'language': 'python', 'region_tag': 'alice', 'canonical': 'trivial'}
    expect_bob = { 'path': '/home/nobody/api/samples/complex/method/usecase_bob', 'language': 'python', 'region_tag': 'robert', 'tag': 'guide'}
    expect_carol = { 'path': '/tmp/newer/carol', 'region_tag': 'math'}
    expect_dan = { 'path': '/tmp/newest/dan', 'region_tag': 'math'}
    return ("valid_manifest", manifest), expect_alice, expect_bob, expect_carol, expect_dan


if __name__ == '__main__':
    unittest.main()
