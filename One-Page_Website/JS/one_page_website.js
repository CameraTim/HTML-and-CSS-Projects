function openBox() {
    document.getElementById("showLightbox").style.display = "block";
}

function closeBox() {
    document.getElementById("showLightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function selectSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myPhotos");
    var dots = document.getElementsByClassName("preview");
    var titleText = document.getElementById("title");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    titleText.innerHTML = dots[slideIndex-1].alt;
}