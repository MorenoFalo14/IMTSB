// JavaScript code for toggling the menu
function toggleMenu() {
    console.log("Menu toggle function called"); // Debugging line
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('show');
}
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = sliderContainer.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 270; // 250px width + 20px margin
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);