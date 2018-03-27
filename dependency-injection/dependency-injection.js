var DI = function(dependency) {
  this.dependency = dependency;
};

DI.prototype.inject = function(func) {
  const deps = [...new Set(func.toString().match(/dep\d/g))];
  const depList = deps.map(dep => this.dependency[dep]);

  return func.bind(this, ...depList);
};

export default DI;
