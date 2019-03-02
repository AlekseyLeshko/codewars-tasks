const argWrapper = (num) => (fun) =>
  (fun && typeof fun === 'function') ? fun(num) : num

export const zero = argWrapper(0)
export const one = argWrapper(1)
export const two = argWrapper(2)
export const three = argWrapper(3)
export const four = argWrapper(4)
export const five = argWrapper(5)
export const six = argWrapper(6)
export const seven = argWrapper(7)
export const eight = argWrapper(8)
export const nine = argWrapper(9)

export const plus = (num) => (a) => a + num
export const minus = (num) => (a) => a - num
export const times = (num) => (a) => a * num
export const dividedBy = (num) => (a) => Math.floor(a / num)
