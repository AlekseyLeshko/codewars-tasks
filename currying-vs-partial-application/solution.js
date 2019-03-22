const curryPartial = (fn, ...args) =>
  (args.length >= fn.length) ?
    fn(...args) :
    (...params) => curryPartial(fn, ...args, ...params)

export default curryPartial
