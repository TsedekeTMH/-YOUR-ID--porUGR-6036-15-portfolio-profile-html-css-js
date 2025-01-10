// Select menu button and navbar navigation
const menuButton = document.querySelector('.navButton');
const navbarNav = document.querySelector('.navbar-nav');

// Add click event listener to the menu button
menuButton.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements
    const hireButton = document.getElementById('hire-me-button');
    const downloadCVButton = document.getElementById('download-cv-button');
    const homeImage = document.getElementById('home-image');
    const homeSubheading = document.getElementById('home-subheading');
    const homeMainText = document.getElementById('home-main-text');
  
    // Add hover effect on Hire Me button
    hireButton.addEventListener('mouseenter', () => {
      hireButton.style.backgroundColor = '#4CAF50';
      hireButton.style.color = '#fff';
    });
  
    hireButton.addEventListener('mouseleave', () => {
      hireButton.style.backgroundColor = '';
      hireButton.style.color = '';
    });
  
    // Add animation effect on image load
    homeImage.addEventListener('load', () => {
      homeImage.style.transition = 'opacity 1s ease-in-out';
      homeImage.style.opacity = '1';
    });
  
    // Text typing animation
    const texts = ['Creative Developer', 'Problem Solver', 'Tech Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
  
    function typeText() {
      if (charIndex < texts[textIndex].length) {
        homeMainText.innerHTML = `I am <span>${texts[textIndex].substring(0, charIndex + 1)}</span>`;
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(eraseText, 2000);
      }
    }
  
    function eraseText() {
      if (charIndex > 0) {
        homeMainText.innerHTML = `I am <span>${texts[textIndex].substring(0, charIndex - 1)}</span>`;
        charIndex--;
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
      }
    }
  
    typeText();
  
    // Add click event for Download CV
    downloadCVButton.addEventListener('click', () => {
      alert('Your CV is being downloaded!');
    });
  });
  
