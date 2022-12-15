const hamburger = document.querySelector(".ham");
const mobileNav = document.querySelector(".mobile-nav");
hamburger.addEventListener("click",() => {mobileNav.classList.toggle("navigation")}, false);
window.onresize = () => {if (window.innerWidth >= 600)mobileNav.classList.remove("navigation")};