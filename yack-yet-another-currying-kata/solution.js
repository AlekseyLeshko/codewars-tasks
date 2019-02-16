const yack = (fn, ...parameters) => {
  if (fn.name === 'helperFun') {
    return fn
  }

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
