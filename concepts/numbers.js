console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.isNaN("123"));
console.log(Number.parseFloat("123.667767"));
console.log(Number.parseInt("123.667767"));

let number = "123456.15789";
console.log(Number(number).toFixed("1"));
let digit = 0.5;
console.log(digit.toExponential(4));

// Type Coercion => change in data type

// 5 == "5" // checks value
// 5 === "5" // checks value and data type
