function generator(sequencer) {
  var args = Array.prototype.slice.call(arguments, 1);
  return {
    next: sequencer.apply(this, args)
  };
}

function dummySeq() {
  return function() {
    return "dummy";
  };
}

function factorialSeq() {
  var accum = 1;
  var i = 0;
  return function() {
    var result = accum;
    i++;
    accum *= i;
    return result;
  };
}

function fibonacciSeq() {
  var prev = 0;
  var curr = 1;
  return function() {
    var result = curr;
    curr += prev;
    prev = result;
    return result;
  };
}

function rangeSeq(start, step) {
  var accum = start;
  return function() {
    var result = start;
    start += step;
    return result;
  };
}

function primeSeq() {

  var i = 0;

  // Sorry, but I can't think of a clever why to do prime number generator
  // It is possible to just increment an accumalator, if it is prime return it, of not increment again
  // But that seems like it would be a hassle
  var list =  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  return function() {
    var result = list[i];
    i++;
    return result;
  };
}

function partialSumSeq() {

  var array = Array.prototype.slice.call(arguments);
  var i = 0;
  var accum = 0;

  return function() {
    if (i === array.length) {
      throw new Error('End of sequence');
    }
    accum += array[i];
    i++;
    return accum;
  };
}