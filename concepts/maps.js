// Like creating a library of key value pairs

let fruits = new Map();

fruits.set("apples", 500);
fruits.set("oranges", 100);
fruits.set("mangoes", 200);

let colors = new Map([
  ["danger", "red"],
  ["primary", "blue"],
  ["success", "green"],
]);

console.log(fruits,colors);
console.log(colors.entries());
console.log(colors.keys());
console.log(colors.values());
console.log(colors.has("yellow"));
