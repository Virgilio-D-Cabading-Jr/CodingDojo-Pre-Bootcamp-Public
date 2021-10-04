/////////////////////////////////////////////////////
// Coding Dojo > Pre-Bootcamp > Intro to Programming > Intro to Algorithms
// T-Diagrams
// By: Virgilio D. Cabading Jr.
// Created: October 03, 2021
/////////////////////////////////////////////////////

// Use the following code to practice keeping track of variables and their values
//     while using a T-diagram

var num1 = 20;                    // Initilize the variables
var num2 = 5;

if (num1 < num2) {                // Outer If/Else statement
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){             // Inner If/Else statement
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}

console.log("num1 is", num1);                // Print the values of the variables to the console
console.log("num2 is", num2);
