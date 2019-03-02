/* eslint-disable sort-imports */

import { describe } from 'ava-spec'
import {
  one, two, zero,
  eight, three,
  five, seven, six,
  plus, minus, times, dividedBy,
} from './solution'

describe('calculating-with-functions:', it => {
  it('should return answer', t => {
    t.is(one(), 1)
    t.is(two(), 2)
    t.is(one(plus(two())), 3)
    t.is(two(plus(one())), 3)
    t.is(zero(plus(one())), 1)
    t.is(eight(minus(three())), 5)
    t.is(seven(times(five())), 35)
    t.is(six(dividedBy(two())), 3)
    t.is(eight(dividedBy(three())), 2)
  })
})
