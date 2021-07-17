import {describe} from 'ava-spec'
import stripUrlParams from './strip-url-params'

describe('strip url params:', it => {
  it('should return url', t => {
    t.is(
      stripUrlParams('www.codewars.com?a=1&b=2&a=2'),
      'www.codewars.com?a=1&b=2',
    )
    t.is(
      stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']),
      'www.codewars.com?a=1',
    )
    t.is(
      stripUrlParams('www.codewars.com', ['b']),
      'www.codewars.com',
    )
  })
})
