function divisors(integer) {
  var divisors = [];
  var limit = Math.floor(integer/2);
  for (var i = 2; i <= limit; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }
  if (divisors.length === 0) {
    return integer + " is prime";
  } else {
    return divisors;
  }
};