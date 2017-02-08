let sumTwoSmallestNumbers = (numbers) => {
  var smallest = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];

  numbers.forEach((number) => {

    if (number < smallest[0]) {
      var tmp = smallest[0];
      smallest[0] = number;
      smallest[1] = tmp;
    } else if (number < smallest[1]) {
      smallest[1] = number;
    }

  });

  return smallest[0] + smallest[1];
};