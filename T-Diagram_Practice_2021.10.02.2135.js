// Coding Dojo > Pre-Bootcamp > Programming Basics > Javascript > T-Diagram Practice
// By: Virgilio D. Cabading
// Created: October 02, 2021

// Use a T-Diagram to predict the output
var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}

// Mt prediction: num1: 8, num2: 5

console.log(num1);
console.log(num2);
