// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon (bars to times)
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Scroll Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply initial styles and observer to elements
const animateElements = document.querySelectorAll('.glass-panel, .section-title, .about-stats .stat-box, .timeline-item');
animateElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
});

// Star Background Animation Generation
function createStars(elementId, count, sizeClass) {
    const layer = document.getElementById(elementId);
    let html = '';
    
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const opacity = Math.random() * 0.8 + 0.2;
        const animationDir = Math.random() > 0.5 ? 1 : -1;
        
        let size;
        if (sizeClass === 'small') size = Math.random() * 1.5 + 0.5;
        if (sizeClass === 'medium') size = Math.random() * 2 + 1;
        if (sizeClass === 'large') size = Math.random() * 3 + 1.5;

        // Using inline styles for dynamic rendering
        html += `<div style="
            position: absolute;
            top: ${y}vh;
            left: ${x}vw;
            width: ${size}px;
            height: ${size}px;
            background: #fff;
            border-radius: 50%;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 2}px #fff;
            animation: twinkle ${Math.random() * 3 + 2}s infinite alternate;
            transform: translateZ(0);
        "></div>`;
    }
    
    layer.innerHTML = html;
}

// Ensure style exists for twinkle animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes twinkle {
    0% { opacity: 0.2; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.2); }
}
`;
document.head.appendChild(styleSheet);

// Initialize stars
if(document.getElementById('stars')) createStars('stars', 100, 'small');
if(document.getElementById('stars2')) createStars('stars2', 50, 'medium');
if(document.getElementById('stars3')) createStars('stars3', 20, 'large');

// Active Navigation Highlight based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current) && current !== '') {
            li.classList.add('active');
        }
    });
});
