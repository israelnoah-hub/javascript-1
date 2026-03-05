let person = "John";

let string = 'Hello World"s' + person;
let singleString = "Good Afternoon" + person;
let backtickString = `Good 
                       Day ${person}`; // keeps your indentation

console.log(singleString, backtickString);
console.log(string.length);
console.log("    Red Flower   ".trim());
console.log("    Red Flower   ".trimStart());
console.log("    Red Flower   ".trimEnd());
console.log("    Red Flower   ".toLowerCase());
console.log("    Red Flower   ".toUpperCase());
console.log("This".padStart(7, "c"));
console.log("Very".padEnd(4, "G"));
console.log("This this".replace("i", "a"));
console.log("This this".replaceAll("i", "a"));
console.log("This ".repeat(4));

console.log("Book".substring(1, 3));
// substring (start and include character,character to end) - works with position

console.log("Book".slice(1, 3));
// slice (start and include character,character to end) - works with position

console.log("School".substr(2, 3));
// substr (start and include character,no of characters) - works with length

console.log("Person".charAt(2));
console.log("Person".concat("A"));
console.log("Person".at(1));
console.log("Sheila is a FullStack Developer".search("Developer")); // usually use Regular Expression
