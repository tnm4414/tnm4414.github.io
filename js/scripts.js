// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show Project Details in Modal
function showProjectDetails(title, details) {
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.getElementById('projectModalBody');
    modalTitle.textContent = title;
    modalBody.textContent = details;
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    projectModal.show();
}

// Background Image Fade-in and Sequential Animations for Content and Buttons
document.addEventListener('DOMContentLoaded', function () {
    const bgCover = document.querySelector('.bg-cover');
    const content = document.querySelector('header .content');
    const buttons = document.querySelector('.buttons');

    // Wait for the background image to load fully before triggering animations
    const img = new Image();
    img.src = bgCover.style.backgroundImage.replace(/url\(["']?/, '').replace(/["']?\)$/, '');

    img.onload = function () {
        // Once the background is loaded, start content and button animations
        content.style.animation = 'fadeInContent 2s forwards';
        buttons.style.animation = 'fadeInButtons 2s forwards';
    };
});

// Navbar Color Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
