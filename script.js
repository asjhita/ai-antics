// script.js

const scrollBtn = document.getElementById('scrollTopBtn');

// Show button after slight scroll
window.onscroll = () => {
  if (window.scrollY > 5) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

// Scroll to top on click
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
