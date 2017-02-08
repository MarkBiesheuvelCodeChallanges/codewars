function brainLuck(code, input) {
  var output = '';
  var memory = Array(256).fill(0);
  var pointer = 0; // Where in the memory are we right now
  var cursor = 0; // Where in the code are we right now
  var needle = 0; // Where in the input are we right now
  var stack = []; // Stack of cursor positions of loops
  var N = code.length;

  while (cursor < N) {
    switch (code[cursor]) {
      case ',': //input
        memory[pointer] = input.charCodeAt(needle);
        needle++;
        break;
      case '.': // output
        output += String.fromCharCode(memory[pointer]);
        break;
      case '+': // incr
        memory[pointer]++;
        if (memory[pointer] >= 256) {
          memory[pointer] = 0;
        }
        break;
      case '-': // decr
        memory[pointer]--;
        if (memory[pointer] < 0) {
          memory[pointer] = 255;
        }
        break;
      case '>': // move right
        pointer++;
        if (pointer >= memory.length) {
          pointer = 0;
        }
        break;
      case '<': // move left
        pointer--;
        if (pointer < 0) {
          pointer = memory.length - 1;
        }
        break;
      case '[': // store cursor position at start of loop or skip
        if (memory[pointer]) {
          stack.push(cursor);
        } else {

          // Skip loop if memory is zero
          var level = 0;
          while (cursor < N) {
            if (code[cursor] === '[') {

              level++;
            } else if (code[cursor] === ']') {
              level--;

              if (level === 0) {
                break;
              }
            }
            cursor++;
          }
        }
        break;
      case ']': // go back to start or continue
        if (memory[pointer]) {
          cursor = stack[stack.length - 1];
        } else {
          stack.pop();
        }
        break;
    }
    cursor++;
  }

  return output;
}

// var output = brainLuck(',+[-.,+]', 'Codewars' + String.fromCharCode(255));
var output = brainLuck('[.+]', '');

console.log(output);