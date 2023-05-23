// countdown timer function
function countdown() {
  let seconds = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    let time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick();
}
// photo slider function

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}