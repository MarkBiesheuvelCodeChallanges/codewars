function diff(poly) {
  var highestPower = poly.length - 1;

  var diff = poly.map(function(val, index) {
    var currentPower = highestPower - index;
    return val * currentPower;
  });

  diff.pop();

  return diff;
}