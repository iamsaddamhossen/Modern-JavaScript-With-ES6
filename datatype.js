
// JavaScript is weekly typed.
// Simple typed system Number(float), String, Boolean, Array and Object 
// Special types NaN, null, undefined 
// Checking type (typeof operator returns a string of the data type primitive)  (instance of operator returns a boolean of if a value matches the data type 

// Types can change 

// let x = "something";
// x = 1;
// x = 1 + "hello"; // is x a string or number? 

// // Equally Gotchas
// let x = 0 == '';  // true, type coerced
// let x = 0 === ''; // false, type respected


const people = ["Saddam", "Hossen", "John", "Test"];
const one = new Number(1);
const str = "Hello World";
const b = true;
const person = {
   firstName: "Saddam",
   lastName: "Hossen"
}

function sayHello(person) {
console.log("Hello " + person.firstName);
}

console.log("--typeof--");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("--instanceof--");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);