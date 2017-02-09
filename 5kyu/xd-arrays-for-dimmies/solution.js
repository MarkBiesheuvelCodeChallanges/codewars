function dim() {
  var first = arguments[0];
  if (arguments.length === 1) {
    if (typeof first === 'function') {
      return first();
    } else {
      return first;
    }
  } else {
    var result = [];
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i=0; i<first; i++) {
      result.push(dim.apply(this, args));
    }
    return result;
  }
}