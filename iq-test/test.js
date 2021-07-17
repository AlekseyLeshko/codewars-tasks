import { describe } from 'ava-spec'
import iqTest from './iq-test'

describe('iq test:', it => {
  it('should return answer for Bob', t => {
    t.is(iqTest('2 4 7 8 10'), 3)
    t.is(iqTest('1 2 2'), 1)
    t.is(iqTest('1 1 2 3'), 3)
  })
})
