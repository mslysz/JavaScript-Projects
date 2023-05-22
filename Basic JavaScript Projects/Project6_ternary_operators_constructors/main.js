// ternary operation
function voteFunction() {
  let Age, Vote;
  Age = document.getElementById('Age').value;
  Vote = (Age < 18) ? "You are not old enough to vote" : "You can vote!";
  document.getElementById("Vote").innerHTML = Vote;
}
// new & this keywords 
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//  A function to display the results of the constructor in an HTML Element.
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

// A nested function

function add_Strings() {
  let start_string = "Hello";

  function Adding(str) {
    start_string = start_string + " " + str;
  }
  Adding("World");
  document.getElementById("Nested_Function").innerHTML = start_string;
}