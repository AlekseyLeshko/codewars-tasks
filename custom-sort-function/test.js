import bubbleSort from './bubble'
import { describe } from 'ava-spec'
import qsort from './qsort'

describe('custom-sort-function:', it => {
  it('bubble sort', t => {
    const list = [{
      arr: [1, -3, 12, 5, -99, 26, 7, 0, 14, 3, 7, 2, 3],
      expected: [-99, -3, 0, 1, 2, 3, 3, 5, 7, 7, 12, 14, 26],
    }, {
      arr: [1],
      expected: [1],
    }, {
      arr: ['abc', 'adc', 'acc'],
      expected: ['abc','acc','adc'],
    }]

    list.forEach(({ arr, expected }) => t.deepEqual(bubbleSort(arr), expected))
  })

  it('quicksort', t => {
    const list = [{
      arr: [1, -3, 12, 5, -99, 26, 7, 0, 14, 3, 7, 2, 3],
      expected: [-99, -3, 0, 1, 2, 3, 3, 5, 7, 7, 12, 14, 26],
    }, {
      arr: [1],
      expected: [1],
    }, {
      arr: ['abc', 'adc', 'acc'],
      expected: ['abc','acc','adc'],
    }]

    list.forEach(({ arr, expected }) => t.deepEqual(qsort(arr), expected))
  })
})
