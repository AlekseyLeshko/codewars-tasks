import { describe } from 'ava-spec'
import findEvenIndex from './solution'

describe('equal-sides-of-an-array:', it => {
  it('should return answer', t => {
    t.is(findEvenIndex([1,2,3,4,3,2,1]), 3)
    t.is(findEvenIndex([1,100,50,-51,1,1]),1)
    t.is(findEvenIndex([1,2,3,4,5,6]),-1)
    t.is(findEvenIndex([20,10,30,10,10,15,35]),3)
  })
})
