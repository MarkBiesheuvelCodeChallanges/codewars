Array.prototype.max = function() {

  this.map(function(a) {
    return parseInt(a, 10);
  });

  return this.reduce(function(a, b) {
    return Math.max(a, b);
  }, Number.NEGATIVE_INFINITY);
};