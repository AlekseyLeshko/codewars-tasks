String.prototype.sortLetters = function() {
  return this.toLowerCase().split('').sort().join('');
};

export default (test, original) => test.sortLetters() == original.sortLetters();
