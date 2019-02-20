import { describe } from 'ava-spec'
import squareDigits from './solution'

describe('square-every-digit:', it => {
  it('should return answer', t => {
    t.is(squareDigits(9119), 811181)
    t.is(squareDigits(3212), 9414)
    t.is(squareDigits(2112), 4114)
  })
})
