import { describe } from 'ava-spec'
import pointInPoly from './point-in-poly'

describe('point in polygon:', it => {
  it('should return answer', t => {
    t.true(pointInPoly([[-5, -5], [5, -5], [0, 5]], [0, 0]))
  })
})
