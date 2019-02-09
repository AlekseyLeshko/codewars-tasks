import abbrevName from './solution';
import { describe } from 'ava-spec';

describe('abbreviate-a-two-word-name:', it => {
  it('should return answer', t => {
    t.deepEqual(abbrevName('Sam Harris'), 'S.H');
    t.deepEqual(abbrevName('Patrick Feenan'), 'P.F');
    t.deepEqual(abbrevName('Evan Cole'), 'E.C');
    t.deepEqual(abbrevName('P Favuzzi'), 'P.F');
    t.deepEqual(abbrevName('David Mendieta'), 'D.M');
  });
});
