// ------------ VARIABLES --------- //

// Defining variables

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter, a $ sign or an underscore (_).
// Names are case sensitive (X is different from x).
// Reserved words (JavaScript keywords) cannot be used as names.


// Naming Variables

// Underscore:
// first_name, last_name, master_card, inter_city.

// Upper Camel Case (Pascal Case):
// FirstName, LastName, MasterCard, InterCity.

// Lower Camel Case:
// firstName, lastName, masterCard, interCity.

// Declare a variable
var word;

// Assign a value to variable
word = "Hello";

var name = "Sheila"; // statement
let school = "Moringa"; // statement
const gender = "Female"; // statement

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
   console.log(b);
}
{
  const c = 8;
   console.log(c);
}
{
 var d = 10; // defaults to a var
}

// console.log(a,d);

// return; // EOF - End of Execution
