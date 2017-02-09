function validBraces(braces){

  var stack = [];
  for (var i=0; i<braces.length; i++) {
    switch (braces[i]) {
      case '{':
        stack.push(1);
        break;
      case '(':
        stack.push(2);
        break;
      case '[':
        stack.push(3);
        break;
      case '}':
        if (stack.pop() !== 1) {
          return false;
        }
        break;
      case ')':
        if (stack.pop() !== 2) {
          return false;
        }
        break;
      case ']':
        if (stack.pop() !== 3) {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
}