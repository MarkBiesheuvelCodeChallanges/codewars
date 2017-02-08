var mapGood = [1,2,3,3,4,10];
var mapEvil = [1,2,2,2,3,5,10];

function calc(input, map) {
  return input.split(/\s/).reduce(function(sum, amount, index) {
    return sum + amount * map[index];
  }, 0);
}

function goodVsEvil(inputGood, inputEvil){

  var sumGood = calc(inputGood, mapGood);
  var sumEvil = calc(inputEvil, mapEvil);

  if (sumGood > sumEvil) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (sumEvil > sumGood) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}