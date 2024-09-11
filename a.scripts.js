document.addEventListener('DOMContentLoaded', function() {
    const qaButtons = document.querySelectorAll('.qa-button');

    qaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const qaItem = button.parentElement;
            const qaContent = qaItem.querySelector('.qa-content');
            qaItem.classList.toggle('active');
            qaContent.style.maxHeight = qaContent.style.maxHeight ? null : qaContent.scrollHeight + "px";
            button.classList.toggle('active');
        });
    });
});

document.querySelectorAll('.qa-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Add more functionality to the photo slider
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const photos = ['gg.png','2.png','pq.png']; // the photos here
let currentPhotoIndex = 0;

const updateSliderPhoto = () => {
    document.querySelector('.slider-photo').src = photos[currentPhotoIndex];
};

leftArrow.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex === 0) ? photos.length - 1 : currentPhotoIndex - 1;
    updateSliderPhoto();
});

rightArrow.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
    updateSliderPhoto();
});

// Automatically change the image every 10 seconds
setInterval(() => {
    currentPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
    updateSliderPhoto();
}, 10000); // 10000ms = 10 seconds
