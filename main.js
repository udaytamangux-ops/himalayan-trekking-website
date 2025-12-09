document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Mobile Menu Toggle
    // ----------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // ----------------------------------------------------
    // 2. Active Link Highlighting
    // ----------------------------------------------------
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add('active');
        }
    }

    // ----------------------------------------------------
    // 3. Initialize AOS (Animate On Scroll)
    // ----------------------------------------------------
    // This replaces our custom intersection observer logic
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true, // Animation happens only once - while scrolling down
            offset: 120, // Offset (in px) from the original trigger point
        });
    } else {
        console.warn('AOS library not loaded');
    }
});
