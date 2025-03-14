// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Dynamic Greeting Message
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
let message;

if (hour < 12) {
  message = 'Good morning! Ensuring Quality, One Test at a Time';
} else if (hour < 18) {
  message = 'Good afternoon! Ensuring Quality, One Test at a Time';
} else {
  message = 'Good evening! Ensuring Quality, One Test at a Time';
}

greeting.textContent = message;

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});