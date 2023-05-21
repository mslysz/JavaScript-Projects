// display typeof 
document.write(typeof "5");

// 0 divided by 0 is NaN
document.write(0 / 0);

function myFunction() {
  document.getElementById("test").innerHTML = 0 / 0;
}

function myFunction2() {
  document.getElementById("test2").innerHTML = isNaN("this is a string");
}

function myFunction3() {
  document.getElementById("test3").innerHTML = isNaN("007");
}

// infinity
document.write(3E310);
// negative Infinity
document.write(-3E310);

// function display infinity
function infFunction() {
  document.getElementById('test4').innerHTML = 3E310;
}
// function display -infinity
function negFunction() {
  document.getElementById('test5').innerHTML = -3E310;
}

// Boolean greater than operator - true

console.log(5 > 2);

// Boolean less than operator - false 

console.log(50 < 40)

// double equal sings 

// true
console.log(50 == 45 + 5)

// false
console.log(20 == 25);

// Triple equal sings

// true
let Date = "10.05.1785", Date2 = "10.05.1785";
console.log(Date === Date2);

// false
let Date3 = "10.05.1785", Date4 = "12.06.1721";
console.log(Date3 === Date4)

// false string and number
let X = "12", Y = 12;
console.log(X === Y);

// true
let cat = 12;
let B = cat;
console.log(cat === B);


// AND operator 
X = 78
C = 100
console.log(X + 22 == 100 && C > X)

// OR operator
A = 5
B = 10
console.log(B == 10 || A == 2);

// not operator
// false
function notFunction() {
  document.getElementById("Not").innerHTML = !(20 > 10);
}

// true
function notFunction2() {
  document.getElementById("Not2").innerHTML = !(5 > 10);
}