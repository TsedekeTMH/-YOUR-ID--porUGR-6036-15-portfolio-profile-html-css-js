// Select menu button and navbar navigation
const menuButton = document.querySelector('.navButton');
const navbarNav = document.querySelector('.navbar-nav');

// Add click event listener to the menu button
menuButton.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});
