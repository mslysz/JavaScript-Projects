// function that returns the length of a string

function lenFunk() {
  let text = "TEST-TEXT"
  let lenghtOfText = text.length;
  document.getElementById('length1').innerHTML = lenghtOfText;
}

// Function using a while loop

function Call_Loop() {
  let i = 0;
  while (i < 10) {
    i++;
  }
  document.getElementById("Loop").innerHTML = i;
}

// Function using a foor loop

let Cars = ["Audi", "BMW", "KIA", "TOYOTA", "MAZDA", "FIAT"];
let Content = "";
let X;
function forLoop() {
  for (X = 0; X < Cars.length; X++) {
    Content += Cars[X] + " , ";
  }
  document.getElementById("List_of_Cars").innerHTML = Content;
}

// Array object
// I created an array and assigned elements to it.

function arrayFunction() {
  let myArray = [];
  myArray[0] = "Audi";
  myArray[1] = "BMW";
  myArray[2] = "DODGE";
  myArray[3] = "TOYOTA";
  document.getElementById("Array").innerHTML = myArray[2] + " it's a great car!"
}

// Const Keyword Assignment

function constantFunction() {
  const colorBox = ["blue", "green", "black", "red"];

  document.getElementById("Constant").innerHTML = colorBox[2];
}

// let keywords

let AB = 745;
console.log(AB);

// return statement

let x = calcFunction(7, 10);
document.getElementById("calc").innerHTML = x;
function calcFunction(a, b) {
  return `result of the multiplication: ${a * b}`
}

// Object 

let car = {
  brand: "Audi",
  model: "A6",
  year: "2015",
  color: "Blue",
  description: function () {
    return `I bought new car ${this.brand}, ${this.model}, ${this.year}, ${this.color}`;
  }
};
document.getElementById("car").innerHTML = car.description();

// loop with break statement
let text = ""

for (let i = 0; i < 6; i++) {
  if (i === 3) { break; }
  text += "Number " + i + "<br>";
}

document.getElementById("break").innerHTML = text;

// loop with continue statement

let text2 = "";

for (let i = 0; i < 10; i++) {
  if (i === 5) { continue }
  text2 += "Number " + i + "<br>";
}
document.getElementById("continue").innerHTML = text2;