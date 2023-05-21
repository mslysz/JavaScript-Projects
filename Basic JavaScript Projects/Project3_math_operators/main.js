// I have created a function that subtracts numbers
function minusFunction() {
  let substraction = 20 - 5;
  document.getElementById('Math').innerHTML = "20 - 5 = " + substraction;
}
// I have created a function that multiplies numbers
function multiFunction() {
  let multiplication = 20 * 10;
  document.getElementById('Multi').innerHTML = "20 * 5 = " + multiplication;
}
// I have created a function that divides numbers
function divisionFunction() {
  let division = 200 / 4;
  document.getElementById('division').innerHTML = " 200 / 4 = " + division;
}
// Function which combines operators, multiplies and then subtracts digits
function multiOpFunction() {
  let multiOp = 5 * (10 - 2);
  document.getElementById('MultiOp').innerHTML = ' 5 * (10 - 2) = ' + multiOp;
}
// function which shows the remainder of divided numbers
function modulFunction() {
  let modul = 30 % 10;
  document.getElementById('ModulOp').innerHTML = 'when you divide 30 by 10 you have a remainder of: ' + modul;
}
// function which creates the negation of a digit
function negationFunction() {
  let negation = 22;
  document.getElementById('negatOp').innerHTML = -negation;
}

// Increment
let x = 20;
x++;
document.write = (x);
// decrement
let y = 5;
y--;
document.write(y);

// random
console.log(Math.random() * 5);
// Math.random function - generate random number
function genFunction() {
  let rNumb = Math.floor(Math.random() * 10);
  document.getElementById('gen').innerHTML = rNumb;
}
