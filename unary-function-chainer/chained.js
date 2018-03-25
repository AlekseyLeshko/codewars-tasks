export default (funs) =>
  (initVal) => funs.reduce((val, fun) => fun(val), initVal);

