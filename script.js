const slideImage = document.getElementById("slide-image");
const preBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const playPauseBtn = document.getElementById("play-pause-btn");

const slidePaths = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
];

const slideAlt = [
    "Featured front end development work",
    "Responsive web development project",
    "Modern Front end development project"
];

let currentSlide = 0;
let isPlaying = true;
let slideTimer = null;

function showSlide(index) {
    if (!slideImage || slidePaths.length === 0) {
        return;
    }
    currentSlide = index;
    slideImage.src = slidePaths[currentSlide];
    slideImage.alt = slideAlt[currentSlide];
}

function nextSlide() {
    showSlide((currentSlide + 1) % slidePaths.length);
}

function preSlide() {
    showSlide((currentSlide - 1 + slidePaths.length) % slidePaths.length)
}

function startSlideShow() {
    if (!isPlaying || slidePaths.length <= 1) {
        return;
    }
    slideTimer = setInterval(nextSlide, 3000);
}

function stopSlideShow() {
    if (slideTimer != null) {
        clearInterval(slideTimer);
        slideTimer = null;
    }
}

function updatePlayPauseButton() {
    if (!playPauseBtn) {
        return;
    }
    playPauseBtn.textContent = isPlaying ? "Pause" : "Play";
}

updatePlayPauseButton();
startSlideShow();

if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}
if (preBtn) {
    preBtn.addEventListener("click", preSlide);
}

if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
        isPlaying = !isPlaying;

        updatePlayPauseButton();

        if (isPlaying) {
            startSlideShow();
        }
        else {
            stopSlideShow();
        }
    });
}

const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(function (img) {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;

    if (!hoverSrc) {
        return;
    }

    img.addEventListener("mouseenter", ()=>{
        img.src = hoverSrc;
    });

    img.addEventListener("mouseleave", ()=> {
        img.src = originalSrc;
    });
});

