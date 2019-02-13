import bubbleSort from './bubble'
import { describe } from 'ava-spec'
import qsort from './qsort'

describe('custom-sort-function:', it => {
  it('bubble sort', t => {
    t.deepEqual(bubbleSort([1]), [1])
    t.deepEqual(bubbleSort([1, 3, 2]), [1, 2, 3])
    t.deepEqual(bubbleSort(['abc', 'adc', 'acc']), ['abc','acc','adc'])
    t.deepEqual(bubbleSort([1, 3, 2, -99, 0, 34, 13]), [-99, 0, 1, 2, 3, 13, 34])
  })

  it('quicksort', t => {
    t.deepEqual(qsort([1]), [1])
    t.deepEqual(qsort([1, 3, 2, -99, 0, 34, 13]), [-99, 0, 1, 2, 3, 13, 34])
    t.deepEqual(qsort(['abc', 'adc', 'acc']), ['abc','acc','adc'])
  })
})
