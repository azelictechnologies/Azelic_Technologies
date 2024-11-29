// scripts.js

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto-change slides every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);
function loadNavbar() {
const xhr = new XMLHttpRequest();
xhr.open('GET', 'header.html', true);
xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('navbar').innerHTML = xhr.responseText;
}
};
xhr.send();
}
window.onload = loadNavbar;
