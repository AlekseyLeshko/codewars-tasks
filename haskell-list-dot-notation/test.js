import ArrayComprehension from './list';
import { describe } from 'ava-spec';

describe('Haskell List Dot Notation:', it => {
  it('should generate empty list', t => {
    t.deepEqual(ArrayComprehension(), []);
    t.deepEqual(ArrayComprehension({}), []);
    t.deepEqual(ArrayComprehension({ generator: '   ' }), []);
  });

  it('should generate list with one item', t => {
    t.deepEqual(ArrayComprehension({ generator: '1' }), [1]);
  });

  it('should generate list with two items', t => {
    t.deepEqual(ArrayComprehension({ generator: '1,2' }), [1, 2]);
    t.deepEqual(ArrayComprehension({ generator: '1 ,   2' }), [1, 2]);
  });

  it('should generate list with some items', t => {
    t.deepEqual(ArrayComprehension({ generator: '1,4,6,3,-2' }), [1, 4, 6, 3, -2]);
  });

  it('should generate list with range', t => {
    t.deepEqual(ArrayComprehension({generator: '1,3..4'}), [1,3]);
    t.deepEqual(ArrayComprehension({generator: '1,2..2'}), [1,2]);
    t.deepEqual(ArrayComprehension({generator: '3,2..2'}), [3,2]);
    t.deepEqual(ArrayComprehension({generator: '5..3'}), []);
    t.deepEqual(ArrayComprehension({generator: '90..80'}), []);
    t.deepEqual(ArrayComprehension({generator: '8,4..40'}), [8]);
    t.deepEqual(ArrayComprehension({generator: '1,90..80'}), [1]);
    t.deepEqual(ArrayComprehension({generator: '1..5'}), [1,2,3,4,5]);
    t.deepEqual(ArrayComprehension({generator: '1,4..12'}), [1,4,7,10]);
    t.deepEqual(ArrayComprehension({generator: '12,10..4'}), [12,10,8,6,4]);
  });
});
