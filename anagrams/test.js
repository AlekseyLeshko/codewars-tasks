import {describe} from 'ava-spec';
import anagrams, {getCache} from './anagrams';

describe('anagrams:', it => {
  it('should return all anagrams for word', t => {
    const expected = ['aabb', 'bbaa'];
    const actual = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);

    t.deepEqual(actual, expected);
  });

  it('should return cache for string', t => {
    const expected = 'a,a,b,b';
    const str = 'abba';

    t.deepEqual(getCache(str), expected);
  });
});
