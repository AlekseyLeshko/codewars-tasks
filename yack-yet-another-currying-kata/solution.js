function yack(fn /*, args */) {
  if (fn.name === 'helperFun') {
    return fn
  }
  const parameters = Array.prototype.slice.call(arguments, 1)

  const helperFun = (allArgs, maxCount, ...args) => {
    allArgs.push(...args)
    if (allArgs.length >= maxCount) {
      return fn(...allArgs.slice(0, 3))
    }
    return (...args) => {
      return helperFun([...allArgs], fn.length, ...args)
    }
  }
  return (...args) => {
    return helperFun([...parameters], fn.length, ...args)
  }
}

export default yack
