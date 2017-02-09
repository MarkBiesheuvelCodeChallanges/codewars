var mem = {};
var fibonacci = function(n) {
  if (n==0 || n == 1) {
    return n;
  }
  if (n in mem) {
    return mem[n];
  }
  var result = fibonacci(n-1) + fibonacci(n-2)
  mem[n] = result;
  return result;
}