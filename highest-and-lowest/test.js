import { describe } from 'ava-spec'
import highAndLow from './solution'

describe('highest-and-lowest:', it => {
  it('should return answer', t => {
    t.is(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'), '542 -214')
    t.is(highAndLow('1 2 -3 4 5'), '5 -3')
    t.is(highAndLow('42'), '42 42')
  })
})
