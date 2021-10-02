// Coding_Dojo_Pre-Bootcamp\2021.10.01.02 Intro to Programming\Javascript\Arrays_Manipulation_in_Javascript_2021-10-01-1551.js
// By: Virgilio D. Cabading Jr.
// October 02, 2021

// Initialize roster of students
var StudentRoster = ["Alice", "Bob", "Charlie"];

// Print Array Info
console.log("********************************");
console.log("Printing info on Array");
console.log("Array name is StudentRoster");
console.log("StudentRoseter's length is: " + StudentRoster.length);
console.log(StudentRoster);
console.log(" ");

// Practice accessing array using index
console.log("********************************");
console.log("Practicing accessing an array using index");
console.log("The first spot in the Student Roster is taken by: " + StudentRoster[0]);
console.log("The second spot in the Student Roster is taken by: " + StudentRoster[1]);
console.log(" ");

// Practice Pushing from an array
console.log("********************************");
console.log("Practicing Pushing in the array");
StudentRoster.push("David");
console.log("David has been pushed onto the Student Roster");
console.log(" ");

console.log("********************************");
console.log("Printing info on Array");
console.log("Array name is StudentRoster");
console.log("StudentRoseter's length is: " + StudentRoster.length);
console.log(StudentRoster);
console.log(" ");

// Practice Popping from an array
console.log("********************************");
console.log("Practicing Popping from the array");
StudentRoster.pop();
console.log("David has ben popped from the Student Roster");
console.log(" ");

console.log("********************************");
console.log("Printing updated info on Array");
console.log("Array name is StudentRoster");
console.log("StudentRoseter's length is: " + StudentRoster.length);
console.log("Student Roster array contains:" + StudentRoster);
console.log(" ");

// Practicing Checking the Lenth of the Array
console.log("********************************");
console.log("Getting the length of the array");
console.log("The length of the Student Roster is " + StudentRoster.length);
console.log(" ");
