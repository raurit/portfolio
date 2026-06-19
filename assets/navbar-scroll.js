function getHeaderImageHeight() {
  // mirrors the body's clamp(280px, 30vw, 55vh) so the threshold
  // matches exactly where the header image actually ends
  const preferred = window.innerWidth * 0.30;
  const max = window.innerHeight * 0.55;
  return Math.min(Math.max(280, preferred), max);
}

function updateNavbarOnScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  const threshold = getHeaderImageHeight();
  if (window.scrollY > threshold) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}

document.addEventListener("scroll", updateNavbarOnScroll);
window.addEventListener("resize", updateNavbarOnScroll);
window.addEventListener("load", updateNavbarOnScroll);