let currentIndex = 0;
let btn1=document.querySelector(".prev")
btn1.addEventListener("click", showPrevSlide )
let btn2=document.querySelector(".next")

btn2.addEventListener("click", showNextSlide)

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex = (currentIndex + 1) % totalSlides;
    const newTransformValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + newTransformValue + ')';
}

function showPrevSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const newTransformValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + newTransformValue + ')';
}
