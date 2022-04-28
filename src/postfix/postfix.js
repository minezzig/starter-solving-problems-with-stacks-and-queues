const Stack = require("../lib/stack");

const precedence = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

const postfix = (expression) => {
  const stack = new Stack();
  const result = [];

  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    if (character === "(") {
      stack.push(character);
    } else {
      if (character === ")") {
        let top = stack.pop();
        while (top !== "(") {
          result.push(top);
          top = stack.pop();
        }
      } else {
        if ("+-*/".includes(character)) {
          if (
            !stack.top ||
            stack.top.value === "(" ||
            precedence[character] > precedence[stack.top.value]
          ) {
            stack.push(character);
          } else {
            while (
              stack.top &&
              precedence[stack.top.value] >= precedence[character]
            ) {
              result.push(stack.pop());
            }

            stack.push(character);
          }
        } else {
          result.push(character);
        }
      }
    }
  });

  while (stack.top) {
    result.push(stack.pop());
  }

  return result.join(" ");
};
postfix("(a+b) * c");
module.exports = postfix;

/**
 * Declare a variable named result and initialize it to an empty string.

Iterate through each character in the expression, ignoring spaces.

If the current character is an operand, append it to result.

Otherwise, if it is an operator, do the following:

Look at the operator at the top of the stack.

If the current operator has higher precedence than the operator on the top of the stack, or if the stack is empty or the top of the stack is (, then push the current operator onto the stack.

Otherwise, start popping operators off of the stack. Continue until you either find an operator that isn't of higher or equal precedence to the current operator, or until you find a parenthesis. Append each operator that is popped from the stack to result. Push the current operator onto the stack.

Otherwise, if the current character is (, push it onto the stack.

Otherwise, if the current character is ), then start popping characters off of the stack and append each character to result until you find a (. Do not append the parentheses to result.

Pop any remaining operators from the stack and append them to result.

Return result.
 */
