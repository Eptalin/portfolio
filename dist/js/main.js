// MENU BEHAVIOUR
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of the Menu
let showMenu = false;


// Add event listener to button
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        // Add appropriate tags to show menu
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Update menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}


// SCROLL ICON
window.onscroll = () => {
    
    // Check if the user is at the bottom of the page
    // If the height of the window + how far we've scrolled >= The height of the 'Body' (-10 to be safe):
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        // Hide the scroll icon
        document.querySelector('.fa-arrow-down').style.visibility = 'hidden';
    } else {
        // Show the scroll icon
        document.querySelector('.fa-arrow-down').style.visibility = 'visible';
    }
}


// STAGGERED APPEAR ANIMATION
const elements = document.querySelectorAll('.fade-in');

document.addEventListener('DOMContentLoaded', () => {
    elements.forEach( (element, index) => {
        setTimeout( () => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 100);
    })
});