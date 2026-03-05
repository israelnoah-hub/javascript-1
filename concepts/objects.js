let Human = {
    name : "Mark", // property
    message : function() { // method
        return "Hello My Name is " + this.name;
    }
}


console.log(Human.message());
console.log(Human.name);
console.log(Human["name"]);

console.log(Object.entries(Human));
console.log(Object.keys(Human));
console.log(Object.values(Human));