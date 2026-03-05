let vowels = new Set(["a", "b", "c", "d", "a", "b"]);
vowels.add("a");

// typeof - check data type
console.log(typeof vowels);
console.log(vowels.size);
console.log(vowels.has("a"));
console.log(vowels.entries());

let alphabet = new Set(['a','b','c','d','e','f','g','h']);
console.log(alphabet.intersection(vowels));
console.log(alphabet.difference(vowels));
console.log(alphabet.union(vowels));
