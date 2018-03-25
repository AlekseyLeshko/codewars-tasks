import chained from './chained';
import {describe} from 'ava-spec';

const f1 = x => x * 2;
const f2 = x => x + 2;
const f3 = x => Math.pow(x, 2);

const f4 = x =>
  x
    .split('')
    .concat()
    .reverse()
    .join('')
    .split(' ');
const f5 = xs => xs.concat().reverse();
const f6 = xs => xs.join('_');

describe('unary-const-chainer:', it => {
  it('should should apply all consts one by one', t => {
    const expected = 'merol_muspi';
    const str = 'lorem ipsum';

    t.is(chained([f2])(0), 2);
    t.is(chained([f2, f2])(0), 4);
    t.is(chained([f1, f2, f3])(0), 4);
    t.is(chained([f1, f2, f3])(2), 36);
    t.is(chained([f3, f2, f1])(2), 12);

    t.is(chained([f4, f5, f6])(str), expected);
  });
});
