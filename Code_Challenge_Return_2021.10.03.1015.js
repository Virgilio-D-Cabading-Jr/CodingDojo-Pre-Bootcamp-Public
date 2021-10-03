// Coding Dojo > Pre-Bootcamp > Programming Bassics > Javascript >
// Code Challenge: Return
// By: Virgilio D. Cabading Jr.
// Created: October 03, 2021

console.log("***********************************"); // First Code Snippet
console.log("First Code Snippet");
console.log("");

function hello() {
    console.log('hello');
}

hello(); // Prints hello to console
console.log('Dojo'); // Prints Dojo to Console
console.log("");

console.log("***********************************"); // Second Code Snippet
console.log("Second Code Snippet");
console.log("");

function hello() { // Creates function hello()
    console.log('hello'); // Prints hello to console
    return 15; // returns the number 15
}

var result = hello(); // Prints hello to console then assigns the number 15 to result variable
console.log('result is', result); // Prints "result is 15" to console

console.log("***********************************"); // Third Code Snippet
console.log("Third Code Snippet");
console.log("");

function numPlus(num) { // Creates function numPlus
    console.log('num is', num); // Prints "num is" <num> to console
    return num+15; // returns num + 15
}

var result = numPlus(3); // num: 3, result: 18
console.log('result is', result); // Printes Result is 18 to console
console.log("");

console.log("***********************************"); // Fourth Code Snippet
console.log("Fourth Code Snippet");
console.log("");

var num = 15; // num: 15
console.log(num); // Prints 15 to console

function logAndReturn(num2){ // Creates logAndReturn function
   console.log(num2); // Prints the value of num2 to console
   return num2; // returns the value of num2
}

var result = logAndReturn(10); // num2: 10   result: 10    
                               // also Prints 10 to console

console.log(result); // Prints 10 to console
console.log(num); // Prints 15 to console
console.log("");



