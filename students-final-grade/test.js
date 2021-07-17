import { describe } from 'ava-spec'
import finalGrade from './solution'

describe('students-final-grade:', it => {
  it('should return answer', t => {
    t.is(finalGrade(100, 12), 100)
    t.is(finalGrade(85, 5), 90)
    t.is(finalGrade(10, 15), 100)
    t.is(finalGrade(85, 5), 90)
    t.is(finalGrade(55, 3), 75)
    t.is(finalGrade(55, 0), 0)
    t.is(finalGrade(20, 2), 0)
  })
})
