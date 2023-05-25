function dayFunction() {
  let dayOutput;
  let days = document.getElementById("dayInput").value;
  let dayString = "Today is : ";
  switch (days) {
    case "Monday":
      dayOutput = dayString + "Monday";
      break;
    case "Tuesday":
      dayOutput = dayString + "Tuesday";
      break;
    case "Wednesday":
      dayOutput = dayString + "Wednesday";
      break;
    case "Thursday":
      dayOutput = dayString + "Thursday";
      break;
    case "Friday":
      dayOutput = dayString + "Friday";
      break;
    case "Saturday":
      dayOutput = dayString + "Saturday";
      break;
    case "Sunday":
      dayOutput = dayString + "Sunday";
      break;
    default:
      dayOutput = "Enter day exactly as written on the above list.";
  }
  document.getElementById("output").innerHTML = dayOutput;
}
// document.getElementsByClassName() Method Assignment

function Hello_World_Function() {
  let A = document.getElementsByClassName("Click");
  A[0].innerHTML = "The text has changed!";
}
//  CANVAS
let D = document.getElementById("ID_Name");
let ctx = D.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "blue")
ctx.fillStyle = grd;
ctx.fillRect(50, 50, 160, 160);
ctx.beginPath();
ctx.arc(125, 127, 120, 0, 2 * Math.PI);
ctx.stroke();