const Stack = require("../lib/stack");

const match = (expression) => {
  const stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      stack.push(expression[i]);
    } else {
      if (expression[i] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  //if stack is empty, return true.  otehrwise return false;
  return !stack.top
};

module.exports = match;

/**
 * Initialize a new empty stack.

Start a loop to iterate through each character in the expression.

If the current character is (:

Push it onto the stack.

Else:

If the current character is ):

If the stack isn't empty:

Pop one item off the stack.

Else:

Return false.

If the stack is empty:

Return true.

Else:

Return false.
 */