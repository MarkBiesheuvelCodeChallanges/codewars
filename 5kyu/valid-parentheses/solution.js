function validParentheses(parens){

  var count = 0;
  for(var i=0; i<parens.length; i++) {
    var char = parens[i];
    if (char === "(") {
      count++;
    } else if (char === ")"){
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return (count === 0);
}