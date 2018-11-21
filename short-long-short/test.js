import { describe } from 'ava-spec';
import shortLongShort from './short-long-short';

describe('short-long-short:', it => {
  it('should return answer', t => {
    t.is(shortLongShort('', ''), '1');
  });
});
