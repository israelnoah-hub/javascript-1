// ------------ VARIABLES --------- //

// Defining variables : use of textual characters

// Declare a variable
var word;

// Assign a value to variable
word = "Hello";

var name = "Sheila"; // statement
let school = "Moringa";
const gender = "Female";

/*
 VAR - Function scoped and mutable
 LET - Block scoped and mutable
 CONST - Block scoped and immutable
*/

{
  var a = 4;
}
{
  let b = 6;
//   console.log(b);
}
{
  const c = 8;
//   console.log(c);
}

{
  d = 10; // defaults to a var
}

// return; // EOF - End of Execution

// ------------ DATA TYPES --------- //

// String,Number,BigInt,Boolean,Object,Undefined,Null,Symbol

let String = "Message";
let number = 23;
let bigint = 23343243444132343432414n;
let boolean = true;
let person = {
    name : "yvonne",
    gender : "female"
}
let undefinedValue = undefined; // implicit
let nullValue = null; // explicit
// console.log(pc); // not defined (not declared or assigned a value)

// ------------ OPERATORS --------- //

// Arithmetic (Add,Sub,Div,Mult,Exp,Mod,Inc,Dec)

// **** Increment & Decrement **** //

let num1 = 10, num2 = 20;

// Case 1
let incA = num1++; // num1 = num1 + 1

// console.log("num1",num1);
// console.log("incA",incA);

// Case 2
let incB = ++num2; // num2 = num2 + 1 

// console.log("num2",num2);
// console.log("incB",incB);


// Logical && , || , !


// Falsy Values

let x = undefined;
let y = null;
let index = 0;
let emptyString = ''; // camelcase
let empty_string = ''; // pascalcase

// console.log(Boolean(x));
// console.log(Boolean(y));
// console.log(Boolean(index));
// console.log(Boolean(emptyString));

// Truthy Values : all other values

let string = "string";
let integer = 20;

// console.log(Boolean(string));
// console.log(Boolean(''));

let and = x && y;
let or = x || y;
let z = true;
let not = !z;

// console.log(not);

// Assignment

let val1 = 5;
let val2 = 8;
val1 += val2;















