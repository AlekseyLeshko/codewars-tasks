import { describe } from 'ava-spec'
import rgbToHex from './rgb-to-hex'

describe('rgb to hex conversion:', it => {
  it('should return hex', t => {
    t.is(rgbToHex(255, 255, 255), 'FFFFFF')
    t.is(rgbToHex(255, 255, 300), 'FFFFFF')
    t.is(rgbToHex(0, 0, 0), '000000')
    t.is(rgbToHex(0, 0, -20), '000000')
    t.is(rgbToHex(148, 0, 211), '9400D3')
  })
})
