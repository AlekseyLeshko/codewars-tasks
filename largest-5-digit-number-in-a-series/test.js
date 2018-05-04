import { describe } from 'ava-spec';
import solution from './solution';

describe('Largest 5 digit number in a series:', it => {
  it('should return largest number', t => {
    t.is(solution('1234567890'), 67890);
  });
});
