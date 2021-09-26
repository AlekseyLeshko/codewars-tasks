import order from './solution'

describe('your order, please:', () => {
  it.each([{
    string: 'is2 Thi1s T4est 3a',
    expected: 'Thi1s is2 3a T4est',
  }, {
    string: '4of Fo1r pe6ople g3ood th5e the2',
    expected: 'Fo1r the2 g3ood 4of th5e pe6ople',
  }, {
    string: '',
    expected: '',
  }])('should return answer', ({ string, expected }) => {
    expect(order(string)).toBe(expected)
  })
})
