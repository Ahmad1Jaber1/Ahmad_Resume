'use strict';

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(btn => btn.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    this.classList.add("active");
    const target = this.textContent.trim().toLowerCase();
    pages.forEach(page => {
      if (page.dataset.page === target) page.classList.add("active");
    });
  });
});
