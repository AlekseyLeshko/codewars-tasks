import curryPartial from './solution'
import { describe } from 'ava-spec'

describe('currying-vs-partial-application:', it => {
  it('should return answer', t => {
    function add(x, y, z) {
      return x + y + z
    }

    t.is(curryPartial(add, 1, 2, 3), 6)
    t.is(curryPartial(add, 1, 2)(3), 6)
    t.is(curryPartial(add, 1)(2)(3), 6)
    t.is(curryPartial(add)(1)(2)(3), 6)
    t.is(curryPartial(add)(1, 2, 3), 6)
    t.is(curryPartial(add)(1, 2)(3), 6)
    t.is(curryPartial(add)()(1, 2)(3), 6)
    t.is(curryPartial(curryPartial(add, 1), 2)(3), 6)
  })
})
