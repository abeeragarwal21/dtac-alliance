import { lock, unlock } from "tua-body-scroll-lock";

// Accordions
const accordions = document.querySelectorAll(".accordion");
console.log(accordions);

function setChallengesAccordionStyles(accordionPanel, panelHeading, isHidden) {
    if (isHidden) {
        accordionPanel.style.backgroundColor = "transparent";
        panelHeading.style.color = "#fff";
    } else {
        accordionPanel.style.backgroundColor = "#fff";
        panelHeading.style.color = "#000";
    }
}

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function (e) {
        const accordionPanel = e.target.closest(".accordion__panel");
        if (!accordionPanel) return;

        const panelContent = accordionPanel.querySelector(".panel__content");
        panelContent.classList.toggle("hidden");

        const panelIcon = accordionPanel.querySelector(".ph");
        const panelHeading = accordionPanel.querySelector(".panel__heading");

        panelIcon.classList = `ph ph-${
            panelContent.classList.contains("hidden") ? "plus" : "minus"
        }`;

        if (accordion.classList.contains("accordion--challenges")) {
            setChallengesAccordionStyles(
                accordionPanel,
                panelHeading,
                panelContent.classList.contains("hidden")
            );
        }
    });
});

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
