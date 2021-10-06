/////////////////////////////////////////////////
// Coding Dojo > Pre-Bootcamp > Intro to Algorithm
// Algorithm App Working with Functions Example 1
// By: Virgilio D. Cabading Jr.
// Created: October 5, 2021
/////////////////////////////////////////////////

//////////////////////////////////////////////////
// Define Functions

function a()                          // Function a()
{
    console.log("hello");
    var result=b(10);
    return result;
}

function b(y)                         // Function b()
{
    console.log("world");
    return y*2+5;
}

////////////////////////////////////////////////////
// Executable Section

var answer = a();
console.log(answer);