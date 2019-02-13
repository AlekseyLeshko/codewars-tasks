/* eslint "ava/use-t-well": "off"  */
/* eslint "ava/no-ignored-test-files": "off"  */

import bubbleSort from './bubble'
import qsort from './qsort'
import suite from 'chuhai'
import test from 'ava'

test('custom-sort-function', suite.macro, t => {
  const arr = [1, -3, 12, 5, -99, 26, 7, 0, 14, 3, 7, 2, 3]
  const expected = [-99, -3, 0, 1, 2, 3, 3, 5, 7, 7, 12, 14, 26]
  let actual

  t.cycle(() => {
    t.deepEqual(actual, expected)
  })

  t.bench('bubble', () => {
    actual = bubbleSort(arr)
  })

  t.bench('qsort', () => {
    actual = qsort(arr)
  })
})
