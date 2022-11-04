const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    toggle.setAttribute("src", "/images/icon-close.svg");
  } else {
    toggle.setAttribute("src", "/images/icon-hamburger.svg");
  }
});
