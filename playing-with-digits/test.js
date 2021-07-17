import { describe } from 'ava-spec'
import digPow from './digPow'

describe('playing-with-digits:', it => {
  it('should return coefficient or -1', t => {
    const list = [{
      number: 89,
      power: 1,
      expected : 1,
    }, {
      number: 92,
      power: 1,
      expected : -1,
    }, {
      number: 695,
      power: 2,
      expected : 2,
    }, {
      number: 46288,
      power: 3,
      expected : 51,
    }]

    list.map((item) => {
      const actual = digPow(item.number, item.power)

      t.is(actual, item.expected)
    })
  })
})

