/* eslint "ava/use-t-well": "off"  */
/* eslint "ava/no-ignored-test-files": "off"  */

import isAnagram from './is-anagram';
import isAnagramStr from './is-anagram/str';
import suite from 'chuhai';
import test from 'ava';

test('anagram detection', suite.macro, t => {
  const list = ['foefet', 'toffee'];
  let actual;

  t.cycle(() => {
    t.true(actual);
  });

  t.bench('hashmap decision', () => {
    actual = isAnagram(list[0], list[1]);
  });

  t.bench('str decision', () => {
    actual = isAnagramStr(list[0], list[1]);
  });
});
