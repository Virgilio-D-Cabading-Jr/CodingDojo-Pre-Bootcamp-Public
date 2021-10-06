///////////////////////////////////////////
// Coding Dojo > Pre-Bootcamp > Programming Basics > Javascript
// JS Tinkering
// By: Virgilio D. Cabading Jr.
// Created October 05, 2021
///////////////////////////////////////////

// The Story
// We want an app that once it measures a kid's height, 
// it can display whether the child is tall enough to ride
// the roller coaster.  We are tasked with building the
// function that will display the right message to the child

////////////////////////////////////////////
// Variables

var childHeight = 56;

////////////////////////////////////////////
// Functions

// Function to determine if the child is able to ride the roller coaster
function ifChildIaAbleToRideTheRollerCoaster(childHeight)
{
    if childHeight > 52
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Function that says if the child is able to ride on the roller coaster
function writeIfChildIsAbleToRideRollercoaster(childHeight)
{
    if (ifChildIaAbleToRideTheRollerCoaster(childHeight))
    {
        return "Get on that ride kiddo!";
    } 
    else
    {
        return "Sorry kiddo, maybe next year.";
    }
}
