import List from './list';
import { describe } from 'ava-spec';

describe('Haskell List Dot Notation:', it => {
  it('should work like list from haskell', t => {
    t.deepEqual(List(), []);
  });
});
