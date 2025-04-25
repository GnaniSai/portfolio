// Mobile menu toggle
const menuToggle = document.querySelector(".mobile-menu-toggle");
const navWrapper = document.querySelector(".nav-wrapper");

menuToggle.addEventListener("click", () => {
  navWrapper.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navWrapper.contains(e.target)) {
    navWrapper.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navWrapper.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
