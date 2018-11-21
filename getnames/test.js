import { describe } from 'ava-spec';
import getNames from './get-names';

describe('get names:', it => {
  it('should return answer', t => {
    const data = [
      {name: 'Joe', age: 20},
      {name: 'Bill', age: 30},
      {name: 'Kate', age: 23},
    ];
    const expected = ['Joe', 'Bill', 'Kate'];

    t.is(getNames(data), expected);
  });
});
