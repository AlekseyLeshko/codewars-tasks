import {describe} from 'ava-spec';
import pascalsTriangle from './pascals-triangle';

describe('pascals triangle:', it => {
  it('should', t => {
    const expected = [1, 1, 1, 1, 2, 1, 1, 3, 3, 1];

    t.deepEqual(pascalsTriangle(4), expected);
  });
});
