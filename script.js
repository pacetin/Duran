/*  Возникновение и исчезание поиска в хедере  */
function openSearch() {
  document.getElementById("popUp").style.opacity="1";
  document.getElementById("popUp").style.transform="translateY(0)";
  document.getElementById("searchField").focus();
}

function closeSearch() {
  document.getElementById("popUp").style.opacity="0";
  document.getElementById("popUp").style.transform="translateY(-20px)";
}


/* Слайдер трансфера */

var slideIndex = 1;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider-dots__item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



