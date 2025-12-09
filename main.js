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
    // 3. Opening Animation (Fade-in on Load)
    // ----------------------------------------------------
    // Select elements to animate on load
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero-search-wrapper');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 1s ease-out forwards ${index * 0.2}s`; // Staggered delay
    });

    // ----------------------------------------------------
    // 4. Scroll Animations (Fade-in on Scroll)
    // ----------------------------------------------------
    const scrollElements = document.querySelectorAll('.section-title, .section-subtitle, .trek-card, .feature-item, .team-member, .contact-container');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('fade-in');
        element.classList.remove('hidden');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) { // Trigger slightly before element is fully in view
                displayScrollElement(el);
            }
        });
    };

    // Initialize elements as hidden
    scrollElements.forEach((el) => {
        el.classList.add('hidden');
    });

    // Trigger once on load to show elements already in view
    handleScrollAnimation();

    // Listen for scroll event
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});
