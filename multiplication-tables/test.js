import { describe } from 'ava-spec'
import multiplicationTable from './multiplication-table'

describe('multiplication tables:', it => {
  it('should return table', t => {
    t.deepEqual(multiplicationTable(2,2), [[1,2],[2,4]])
    t.deepEqual(multiplicationTable(3,3), [[1,2,3],[2,4,6],[3,6,9]])
    t.deepEqual(multiplicationTable(3,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
    t.deepEqual(multiplicationTable(4,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
    t.deepEqual(multiplicationTable(2,5), [[1,2,3,4,5],[2,4,6,8,10]])
  })
})
