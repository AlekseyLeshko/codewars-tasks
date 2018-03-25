import {describe} from 'ava-spec';
import pascalsTriangle from './pascals-triangle';

describe('pascals triangle:', it => {
  it('should return array', t => {
    const expectedList = [
      [1],
      [1, 1, 1],
      [1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 2, 1, 1, 3, 3, 1],
    ];

    [...Array(expectedList.length)].forEach((num, index) => {
      t.deepEqual(pascalsTriangle(index + 1), expectedList[index]);
    });
  });
});
