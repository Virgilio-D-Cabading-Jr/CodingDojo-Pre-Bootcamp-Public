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

