function pascalsTriangle(n) {

  // Base case
  if (n === 0) {
    return [];
  }

  // Recursive call
  var triangle = pascalsTriangle(n - 1);

  // Since we are dealing with a one-dimensional array
  // we would like to know where the previous level started
  var offset = triangle.length - n;

  // Add n new elements
  for (var i = 0; i < n; i++) {
    if (0 < i && i < n - 1) {
      // Add the sum of two numbers
      var value = triangle[offset + i] + triangle[offset + i + 1];
      triangle.push(value);
    } else {
      // Add 1 on the borders
      triangle.push(1);
    }
  }

  // Done
  return triangle;
}