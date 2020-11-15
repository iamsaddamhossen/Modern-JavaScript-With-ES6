// Time is construct or at the very least, it's a JS object
// One central object = Date contains both date and time
//Internally time is stored in as number of miliseconds since 1 jan 1970

// creating a date object
// get right now
//const now = new Date();

// Set a specific date and time
// Month counting starts with zero
//const randomDate = new Date(2015, 3, 12, 6, 25, 58);

// Set a specific date-time set to midnight
//const win95Launch = new Date(1995, 7, 24);

//console.log(randomDate);
//console.log(win95Launch);


// Setting values
// const now = new Date(); 
// now.setFullYear(2014); // Set year
// now.setMonth(3); // April (Counting start with zero)
// now.setDate(4);  // Sets day

// now.setHours(4);  // 24 hour clock
// now.setMinutes(24);
// now.setSeconds(46);

// console.log(now);


const now = new Date();

const win95Launch = new Date(1995, 7, 24);

const demoDate = new Date();
demoDate.setMonth(0);

console.log(demoDate);
console.log(now);
console.log(win95Launch);
console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);