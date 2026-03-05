// ------------ OPERATORS --------- //

// ARITHMETIC :: Addition,Subtraction,Division,Multiplication,Exponential,Modulus,Increment,Decrement

let num1 = 10,
  num2 = 20;

// num1 + num2
// num1 - num2
// num1 / num2
// num1 * num2
// num1 ** num2
// num1 % num2

// Increment and Decrement // TODO: Shelf

// Case 1
let incA = num1++;

// incA = num1;
// num1 = num1 + 1;

// Case 2
let incB = ++num2;

// num2 = num2 + 1;
// incB = num2;

console.log(num1);
console.log(num2);

// LOGICAL :: && , || , !

// Falsy Values : undefined,null,0,''

let x = undefined;
let y = null;
let index = 0;
let emptyString = "";

// Truthy Values : all other values

let string = "string";
let integer = 20;

let and = x && y;
let or = x || y;
let z = true;
let not = !z;

// ASSIGNMENT :: += , -= ,/= , *= 

let val1 = 5;
let val2 = 8;
val1 += val2;

// val1 = val1 + val2;
console.log(val1);

// COMPARISON :: < , > , =< , >= 
console.log(val1 > val2);
