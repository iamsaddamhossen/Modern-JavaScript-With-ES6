// parseInt() and parseFloat() converts numerical strings to numbers adding non- numerical characters canhave un intended results.
// parseFloat() is for floating point numbers, numbers with decimals point
// toString() Converts numbers to numerical strings

let num1 = "150";

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); // Hexadecimals

let flo1 = "1.50";
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

// Numbers are special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

// Using Template Literals
console.log(parseInt(`${1 + 1}`));

// Converts numbers to string
let num11 = 150;
let flo11 = 1.50;
console.log(num11.toString());
console.log(flo11.toString());
console.log((100).toString());