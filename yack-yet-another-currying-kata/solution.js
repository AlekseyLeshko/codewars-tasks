const yack = (fn, ...parameters) => {
  if (fn.name === 'wrapper') {
    return fn(...parameters)
  }

  if (parameters.length >= fn.length) {
    return fn(...parameters.slice(0, fn.length))
  }

  const helperFun = (allArgs, maxCount, ...args) => {
    allArgs.push(...args)
    if (allArgs.length >= maxCount) {
      return fn(...allArgs.slice(0, maxCount))
    }

    return function wrapper(...args) {
      return helperFun([...allArgs], maxCount, ...args)
    }
  }

  return function wrapper(...args) {
    return helperFun([...parameters], fn.length, ...args)
  }
}

export default yack
