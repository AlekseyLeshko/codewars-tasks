import {describe} from 'ava-spec';
import race from './race';

describe('tortoise racing:', it => {
  it('should return needed time in hours, minutes and second', t => {
    t.is(race(720, 850, 70), [0, 32, 18]);
    t.is(race(80, 91, 37), [3, 21, 49]);
    t.is(race(80, 100, 40), [2, 0, 0]);
    t.is(race(720, 850, 37), [0, 17, 4]);
    t.is(race(720, 850, 370), [2, 50, 46]);
    t.is(race(120, 850, 37), [0, 3, 2]);
    t.is(race(820, 850, 550), [18, 20, 0]);
    t.is(race(820, 81, 550), null);
  });
});
