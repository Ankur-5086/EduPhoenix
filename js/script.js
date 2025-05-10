// Function to show welcome message
function showWelcome() {
  alert("Welcome to Edu Phoenix! Let's learn together 🚀");
}

// Hamburger menu functionality

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const dropdown = document.querySelector('.dropdown-fullscreen');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', () => {
    dropdown.classList.add('active');
    menuToggle.classList.add('active');
    closeBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    dropdown.classList.remove('active');
    menuToggle.classList.remove('active');
    closeBtn.style.display = 'none';
  });
});