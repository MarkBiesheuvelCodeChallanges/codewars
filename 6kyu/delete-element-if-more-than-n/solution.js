function deleteNth(array, n){

  var counter = {};

  return array.filter(function(value) {

    if (value in counter) {
      counter[value]++;
    } else {
      counter[value] = 1;
    }

    return counter[value] <= n;
  });

}