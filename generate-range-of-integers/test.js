import { describe } from 'ava-spec';
import generateRange from './solution';

describe('generate-range-of-integers:', it => {
  it('should return answer', t => {
    t.deepEqual(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
    t.deepEqual(generateRange(1, 10, 3), [1, 4, 7, 10]);
  });
});
