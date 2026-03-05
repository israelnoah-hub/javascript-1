// Reusable block of code that perform a specific task

// Function declaration

function mult(num1, num2) {
  // code
  return num1 * num2;
}

// Function expression

let add = function (num1, num2) {
  // code
  return num1 + num2;
};

let div = (num1, num2) => num1 / num2;

// Anything after the return statement is not executed

console.log(mult(4,6));
console.log(add(4,6));
console.log(div(4,6));
