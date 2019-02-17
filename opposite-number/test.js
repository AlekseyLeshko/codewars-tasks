import { describe } from 'ava-spec'
import opposite from './solution'

describe('opposite-number:', it => {
  it('should return answer', t => {
    t.is(opposite(1), -1)
    t.is(opposite(14), -14)
    t.is(opposite(-34), 34)
    t.is(opposite('-34'), 34)
    t.is(opposite('14'), -14)
  })
})
