import { describe } from 'ava-spec'
import tankvol from './tankvol'

describe('tank truck:', it => {
  it('should return answer', t => {
    t.is(tankvol(40, 120, 3500), 1021)
    t.is(tankvol(60, 120, 3500), 1750)
    t.is(tankvol(5, 7, 3848), 2940)
    t.is(tankvol(2, 7, 3848), 907)
  })
})
