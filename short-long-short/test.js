import { describe } from 'ava-spec'
import shortLongShort from './short-long-short'

describe('short-long-short:', it => {
  it('should return answer', t => {
    const list = [
      ['1', '22', '1221'],
      ['22', '1', '1221'],
      ['', '1', '1'],
      ['', '', ''],
    ]

    list.forEach(([ firstStr, secondStr, expected ]) => {
      t.is(shortLongShort(firstStr, secondStr), expected)
    })
  })
})
