let Z = 25;

function myFunction() {
  let X = 10;
  document.write(Z + X);

}
// console error
console.log(Z + X);

function dateFunction() {
  if (new Date().getHours() < 18) {
    document.getElementById('DX').innerHTML = "How are you today?";
  }
}
//  if function
function poFunction() {
  let Age = 22;
  if (Age >= 20)
    document.getElementById("PO").innerHTML = "You can enter !";
  else
    alert("STOP you can't enter!")
}


// if and else function
function fateFunction() {
  Color = document.getElementById('Fate').value;
  if (Color >= 23) {
    Fate = "Your day will be successful";
  }
  else {
    Fate = "You will be rich!";
  }
  document.getElementById("Answer").innerHTML = Fate;
}

// else if function
function Time_function() {
  let Time = new Date().getHours();
  let Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  }
  else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon";
  }
  else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}

