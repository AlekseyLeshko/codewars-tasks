import {describe} from 'ava-spec';
import isAnagram from './is-anagram';

describe('anagram detection:', it => {
  it('should all word pairs is anagram', t => {
    const list = [['foefet', 'toffee'], ['Buckethead', 'DeathCubeK']];

    list.forEach(arr => t.true(isAnagram(arr[0], arr[1])));
  });
});
