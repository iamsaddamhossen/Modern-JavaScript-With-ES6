// Uninetended behaviour in JavaScript:
// Exception: Interruption in the intended execution of the code
// Error: Uninetended interruption in the execution of the code, typically show up as a exception syntax error are a type of exceptions that occurs when incorrect syntax is used
// Throwing an exception: Sending a message that something has gone wrong in the intended execution of the code, this can be thrown by JavaScript or by the developer with throw of the code

// Handling errors in Javascript
// Uncaught Exceptions: Exceptions that have been thrown when code has no guidance to handle the interruption users may see unhelpful obscure messages, or none exist Catch operations with try..catch..finally

// Try: Block of code that may thrown an exceptions
// Catch:  Block of code that will run if an exceptions is shown
// Finally: Optional enclosed part of code that will run after the try block or after the catch block runs every time even if an exception is not thrown.


function criticalCode() {
   throw "throwing an exeptions"; 
}

function logError(theException) {
   console.log(theException);
}

//Throwing Exceptions
console.log("\n*******\n");

throw 'myExceptions';
throw true;

// Try..Catch
console.log("\n****Try Catch***\n");

try{
   criticalCode();
} catch (ex) {
   console.log("Got an error");
   logError(ex);
}

// Throwing in try catch
console.log("\n****Throwing in Try Catch***\n");

try {
throw "An exceptions that is thrown in every time";
} catch(ex) {
   console.log("Got an error");
   logError(ex);
}

// Try Catch Finally
console.log("\n****Try Catch Finally***\n");

try {
   criticalCode();
} catch (ex) {
   console.log("Got an error");
   logError(ex);

} finally {
   console.log("code that always will run");
}

