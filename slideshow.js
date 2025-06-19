let slideIndex = 0;
let slides, timer;

function showSlides(n) {
  slides = document.getElementsByClassName("slide");
  if (n === undefined) n = slideIndex;
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlides(slideIndex);
  resetTimer();
}

function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
  timer = setTimeout(autoSlides, 3500);
}

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(autoSlides, 3500);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  timer = setTimeout(autoSlides, 3500);
});
