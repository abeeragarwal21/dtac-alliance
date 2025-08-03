// Accordions
const accordions = document.querySelectorAll(".accordion");
console.log(accordions);

function setPanelIcon(panelIcon, isHidden) {
    panelIcon.classList = `ph ph-${isHidden ? "plus" : "minus"}`;
}

function setChallengeStyles(accordionPanel, panelHeading, isHidden) {
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
        const isHidden = panelContent.classList.contains("hidden");

        setPanelIcon(panelIcon, isHidden);

        if (accordion.classList.contains("accordion--challenges")) {
            setChallengeStyles(accordionPanel, panelHeading, isHidden);
        }
    });
});

// Mobile menu
const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavBtnIcon = mobileNavBtn.querySelector(".ph");

let scrollPosition = 0;

function showHideMobileNav() {
    mobileMenu.classList.toggle("hidden");
    mobileNavBtnIcon.classList = "";
    mobileNavBtnIcon.classList = `ph ph-${
        mobileMenu.classList.contains("hidden") ? "list" : "x"
    }`;
}

mobileNavBtn.addEventListener("click", function () {
    showHideMobileNav();
});

mobileMenu.addEventListener("click", function () {
    showHideMobileNav();
});
