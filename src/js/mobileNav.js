import { lock, unlock } from "tua-body-scroll-lock";

// Mobile menu
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavBtnIcon = mobileNavBtn.querySelector(".ph");

function showHideMobileNav() {
    mobileMenu.classList.toggle("hidden");
    mobileNavBtnIcon.classList = "";
    mobileNavBtnIcon.classList = `ph ph-${
        mobileMenu.classList.contains("hidden") ? "list" : "x"
    }`;

    if (mobileMenu.classList.contains("hidden")) {
        unlock();
    } else {
        lock();
    }
}

mobileNavBtn.addEventListener("click", function () {
    showHideMobileNav();
});

mobileMenu.addEventListener("click", function () {
    showHideMobileNav();
});
