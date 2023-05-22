// I used the concat method to combine the strings
function concatFunction() {
  let A = "I "
  let B = "am "
  let C = "here "
  let D = "to learn "
  let E = "JavaScript! "
  let fullConcatenation = A.concat(B, C, D, E);
  document.getElementById("FX").innerHTML = fullConcatenation;
}

// Slice method

function slice_Method2() {
  let X = "Here we cut out the word Owl"
  let Y = X.slice(20, 25);
  document.getElementById("Cut").innerHTML = Y;
}

// toUpperCase() method

let text = "lower case text is now big"
console.log(text.toUpperCase());

// search() method
let text2 = "test 123 test 123"
console.log(text2.search("test"))

// toString() method transform number to string
function toStringFunction() {
  let numb1 = 25;
  document.getElementById("transform").innerHTML = numb1.toString();
}
// toPrecision() method formats a number to a specified length
function precision_Method() {
  let X = 1245455.6465656;
  document.getElementById("precis").innerHTML = X.toPrecision(10);
}

// toFixed method 

let numb4 = 1.254695;
console.log(numb4.toFixed(2))

// valueOf method

let numb5 = 19;
console.log(numb5.valueOf())