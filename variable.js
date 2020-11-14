// Variable Declaring in JS

// Var = Function Scoped, Can be changed in scope, Available before declaration
// Let = Block scoped, Can be changed in scope, Only available after declaration
// Const = Block scoped like Let, Can not be changed, Only available after declaration

// What to use when? const by default let in loops


// var one = 1; 
// let two = 2;
// const three = 3;

var hello = "hello";
console.log(hello);  
hello = "Hello World";
console.log(hello);

if(true) {
   let world = "Hello World";
   console.log(world);
}


const saddam = "Saddam";

console.log(saddam);

saddam = "Saddam Hossen";
