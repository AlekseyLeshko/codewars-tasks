import {describe} from 'ava-spec';
import findBall from './find-ball';

describe('the shell game:', it => {
  it('should return answer', t => {
    t.is(findBall(5, []), 5);

    t.is(findBall(0, [[0, 1], [2, 1], [0, 1]]), 2);
    t.is(
      findBall(0, [
        [0, 1],
        [1, 2],
        [2, 0],
        [0, 1],
        [1, 2],
        [2, 1],
        [2, 0],
        [0, 2],
      ]),
      1,
    );
  });
});
