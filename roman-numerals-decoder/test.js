import {describe} from 'ava-spec'
import solution from './solution'

describe('roman numerals decoder:', it => {
  it('should return number', t => {
    t.is(solution('IV'), 4)
    t.is(solution('XXI'), 21)
    t.is(solution('MDCLXVI'), 1666)
    t.is(solution('MCMXC'), 1990)
    t.is(solution('MMVIII'), 2008)
  })
})
