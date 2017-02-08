function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function simplify(poly) {

  let terms = poly.split(/(?=[+-])/);

  let map = new Map();

  terms.forEach((term) => {
    let matches = /^(|\+|-)([0-9]*)([a-z]+)$/.exec(term);
    let sign = matches[1];
    let number = matches[2];
    let variables = matches[3];

    if (number === '') {
      number = '1';
    }
    number = parseInt(sign + number, 10);
    variables = variables.split('').sort().join('');

    if (map.has(variables)) {
      number += map.get(variables);
    }
    map.set(variables, number);

  });

  terms = [];
  for (let [variables, number] of map) {
    terms.push({variables, number});
  }

  terms = terms.sort((a, b) => {
    let result = compare(a.variables.length, b.variables.length);
    if (result === 0) {
      result = compare(a.variables, b.variables);
    }
    return result;
  });

  return terms.reduce((accumulator, term) => {

    if (term.number === 0) {
      return accumulator;
    }

    if (term.number > 0 && accumulator !== '') {
      accumulator += '+';
    } else if(term.number < 0) {
      accumulator += '-';
      term.number *= -1;
    }

    if (term.number !== 1) {
      accumulator += term.number;
    }

    accumulator += term.variables;

    return accumulator;
  }, '');
}