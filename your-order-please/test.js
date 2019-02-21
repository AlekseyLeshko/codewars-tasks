import { describe } from 'ava-spec'
import order from './solution'

describe('your order, please:', it => {
  it('should return answer', t => {
    t.is(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est')
    t.is(order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople')
    t.is(order(''), '')
  })
})
