// footer //
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

// header //
const hamButton = document.querySelector('#menu');
const temp = document.querySelector('#siteplan');

hamButton.addEventListener('click', () => {
	console.log("click-button")
	temp.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// home //
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
 function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    if(slides) slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 4000);

// Japan //



//Trip Plan//
const imagePaths = {
    hokkaido: [
        "images/hokkaido1.webp",
        "images/hokkaido2.webp",
        "images/hokkaido3.webp",
        "images/hokkaido4.webp",
    ],
    tokyo: [
        "images/tokyo1.webp",
        "images/tokyo2.webp",
        "images/tokyo3.webp",
        "images/tokyo4.webp",
    ],
    kyoto: [
        "images/kyoto1.webp",
        "images/kyoto2.webp",
        "images/kyoto3.webp",
        "images/kyoto4.webp",
    ]
};

let currentImageIndex = 0;

const images = document.querySelectorAll('.hokkaido');

images.forEach((image, index) => {
    image.addEventListener("contextmenu", (event) => {
        event.preventDefault();

        const nextIndex = (index + 1) % imagePaths.length
        image.src = imagePaths[nextIndex];
    });
});

function changeImage(location) {
    currentImageIndex = (currentImageIndex + 1) % 4;
    const imageId = `${location}1`;
    const currentImage = document.getElementById(imageId);
    currentImage.src = imagePaths[location][currentImageIndex];
}

//contact us//
document.getElementById("myform")?.addEventListener("submit", function(event) {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plan").value;

    if (fname==="" || lname==="" || email==="" || plan==="") {
        alert("Please fill in all required fields.");
        event.preventDefault();
    }
});