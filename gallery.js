// JavaScript para la galería de imágenes en modal
let currentIndex = 0;
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg",
    "images/image17.jpg",
    "images/image18.jpg",
    "images/image19.jpg",
];

function openModal(index) {
    currentIndex = index;
    document.getElementById("galleryModal").style.display = "block";
    showImage();
}

function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
}

function showImage() {
    document.getElementById("modalImage").src = images[currentIndex];
}
