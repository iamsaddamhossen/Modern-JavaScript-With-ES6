/*
This code reverse a string
*/

let value = "Reverse Me";
let reversedvalue = "";

value.split("").forEach((char)=>{
   reversedvalue = char + reversedvalue;
})

console.log(`${reversedvalue}`);


function reverseString(value) {
   let reversedValue = "";

   value.split("").forEach((char)=>{
      reversedValue = char + reversedValue;
   })

   return reversedValue;
}

console.log(reverseString("Saddam Hossen"));





