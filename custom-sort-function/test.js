import bubbleSort from './bubble'
import { describe } from 'ava-spec'

describe('custom-sort-function:', it => {
  it('should return answer', t => {
    t.deepEqual(bubbleSort([1]), [1])
    t.deepEqual(bubbleSort([1, 3, 2]), [1, 2, 3])
    t.deepEqual(bubbleSort(['abc', 'adc', 'acc']), ['abc','acc','adc'])
  })
})
