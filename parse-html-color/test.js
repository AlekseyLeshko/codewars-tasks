import { describe } from 'ava-spec'
import parseColor from './parse-color'

describe('parse html color:', it => {
  it('should return color', t => {
    const expected = [
      { r: 128, g: 255, b: 160 },
      { r: 51,  g: 187, b: 119 },
      { r: 50,  g: 205, b: 50  },
    ]
    const colors = [
      '#80FFA0',
      '#3B7',
      'LimeGreen',
    ]

    colors.forEach((color, index) => t.deepEqual(parseColor(color), expected[index]))
  })
})

