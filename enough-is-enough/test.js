import {deleteNth} from './decision';
import {describe} from 'ava-spec';

describe('enough is enough:', it => {
  it('test#1', t => {
    const expected = [1, 1];
    const list = [1, 1, 1, 1, 1];

    t.deepEqual(deleteNth(list, 2), expected);
  });

  it('test#2', t => {
    const expected = [20, 37, 21];
    const list = [20, 37, 20, 21];

    t.deepEqual(deleteNth(list, 1), expected);
  });

  it('test#2', t => {
    const expected = [20, 37, 20, 21, 37];
    const list = [20, 37, 20, 21, 37, 37, 20, 20, 20];

    t.deepEqual(deleteNth(list, 2), expected);
  });
});
