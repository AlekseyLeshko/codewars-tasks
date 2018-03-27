var DI = function(dependency) {
  this.dependency = dependency;
};

DI.prototype.inject = function(func) {
  const res = func
    .toString()
    .split(/\((.*?)\)/g)[1]
    .split(/,\s/g)
    .reduce((arr, dep) => {
      if (this.dependency[dep]) {
        arr.push(this.dependency[dep]);
      }

      return arr;
    }, []);

  return func.bind(this, ...res);
};

export default DI;
