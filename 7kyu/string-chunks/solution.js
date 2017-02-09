function stringChunk(str, n) {
  var result = [];
  if (n > 0) {
    for (var i = 0; i < str.length; i += n) {
      result.push(str.substring(i, i + n));
    }
  }
  return result;
}