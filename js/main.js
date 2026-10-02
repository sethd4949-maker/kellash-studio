/* =========================================================
   KELLASH STUDIO V2
   Main JavaScript
   ========================================================= */

const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("nav");
const yearElement = document.getElementById("year");


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.textContent = isOpen ? "×" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
});


/* Close menu after clicking a navigation link */

document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");

        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

yearElement.textContent = new Date().getFullYear();
