function power(s) {
  var result = [];
  var n = Math.pow(2, s.length);  // Power set will have 2^s.length subsets
  var item;

  for (var k=0; k<n; k++) {
    item = [];
    // Loop over elements in original
    for (var i=0; i<s.length; i++) {
      // Use binary representation of outerloop as true/false whether to add element to subset
      if(k&1<<i) {
        item.push(s[i]);
      }
    }
    result.push(item);
  }

  return result;
}