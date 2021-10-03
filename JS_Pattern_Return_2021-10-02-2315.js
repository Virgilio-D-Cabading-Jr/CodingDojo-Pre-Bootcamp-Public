// Coding Dojo > Pre-Bootcamp > Programming Basics > Javascript
// JS Pattern Return
// By: Virgilio D. Cabading Jr.
// Created: October 02, 2021

// Code Snippet 1
console.log("*****************************");
console.log("Code Snippet 1");
console.log("");

function getFirstNameFromForm (){
    var firstName = "Juan";
    return firstName; 
}

// myPrediction: Juan
console.log(getFirstNameFromForm());   
console.log("");

// Code Snippet 2
console.log("******************************");
console.log("Code Snippet 2");
console.log("");

function calculateTipAmount (billTotal, tipPercent){
    var billTotal;
    var tipPercent;
    var tipDue = billTotal * tipPercent;
    
    return tipDue; 
}

// myPrediction: 28
console.log("the tip amount for a bill of 140 is " + calculateTipAmount(140, .20));
console.log("");

