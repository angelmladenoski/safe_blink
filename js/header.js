// html elements
const profileNavLink = document.getElementById("profileNavLink");
const navProfileImg = document.getElementById("navProfileImg");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginBtnMobile = document.getElementById("loginBtnMobile");
const logoutBtnMobile = document.getElementById("logoutBtnMobile");

// hamburger toggle
export function toggleHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// header scroll
export function headerScroll() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("header-scrolled", this.window.scrollY > 10);
  });
}

// active nav link
export function activeNavLink() {
  const navLinks = document.querySelectorAll("#navMenu li a");
  const hash = window.location.hash.substring(1);

  navLinks.forEach((link) => {
    link.classList.toggle("active-nav-link", link.id === hash);
  });
}
