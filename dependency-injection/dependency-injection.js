var DI = function(dependency) {
  this.dependency = dependency;
};

DI.prototype.inject = function(func) {
  return func;
};

export default DI;
