import data from "../mock/data.js";

let { countries } = data;

let country = [];

console.log(countries[0]); // get index
console.log(countries.length); // array length
console.log(countries.pop()); // discard last element
country.push(countries.pop()); // push -> add elements
country.unshift({ name: "Antia", code: "AI" }); // add on first position
console.log(country.shift()); // discard the first element
console.log(country);
console.log(country.at(0));

let letters = ["a".toUpperCase(), "b", "c"];
console.log(letters.join(","));

let hobbies = [
  ["Cooking", "Swimming"],
  ["Coding", "Running"],
].flat();
delete hobbies[0];
console.log(hobbies.slice(0, 2));

letters = ["Abel", "George", "Aaron"];
console.log(letters.sort().reverse());
console.log(letters.includes("George"));
console.log(Array.isArray(letters));
