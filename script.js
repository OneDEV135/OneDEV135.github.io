// Script for onedev135.github.io

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.style.background = 'rgba(0, 0, 0, 0.75)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0)';
    }
});
