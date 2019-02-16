const yack = (fn, ...parameters) =>
  parameters.length >= fn.length ? fn(...parameters) : (...args) => yack(fn, ...parameters, ...args)

export default yack
