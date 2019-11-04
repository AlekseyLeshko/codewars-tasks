const chain = (fns, answer) =>
  Object.entries(fns).reduce((acc, [key, fun]) => ({
    ...acc,
    [key]: (...params) => chain(fns, fun(...(answer ? [answer, ...params] : params))),
  }), { execute: () => answer })

export default chain
