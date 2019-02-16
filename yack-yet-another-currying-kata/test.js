import { describe } from 'ava-spec'
import yack from './solution'

describe('YACK (Yet Another Currying Kata):', it => {
  it('should return answer', t => {
    function add(a, b, c) {
      return a + b + c
    }

    t.is(yack(add)(1)(2)(3), 6)
    t.is(yack(add, 1, 2)(3), 6)
    t.is(yack(add)(1, 2)(3), 6)
    t.is(yack(add)(1)()()()(2)(3), 6)
    t.is(yack(yack(add))(1)(2)(3), 6)
    t.is(yack(yack(yack(add)(1)))(2)(3), 6)
    t.is(yack(add)(1)(2)(3, 4, 5), 6)

    var curriedAdd1 = yack(add)(1)
    t.is(curriedAdd1(2)(3), 6)
    t.is(curriedAdd1(2)(4), 7)
    t.is(yack(yack(curriedAdd1, 2), 3), 6)

    var curriedAdd2 = yack(add)
    var curriedAdd3 = curriedAdd2(1)
    t.is(curriedAdd3(2)(3), 6)
    t.is(curriedAdd3(2)(4), 7)
    t.is(curriedAdd2(5)(2)(3), 10)

    t.is(yack(add, 2, 1, 4, 20), 7)

    function constFun() {
      return 20
    }
    t.is(yack(constFun), 20)
  })
})
