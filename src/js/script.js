const accordions = document.querySelectorAll(".accordion");
console.log(accordions);

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function (e) {
        const accordionPanel = e.target.closest(".accordion__panel");

        if (!accordionPanel) {
            return;
        }

        const panelContent = accordionPanel.querySelector(".panel__content");
        panelContent.classList.toggle("hidden");

        const panelIcon = accordionPanel.querySelector(".ph");
        panelIcon.classList = "";
        panelIcon.classList = `ph ph-${
            panelContent.classList.contains("hidden") ? "plus" : "minus"
        }`;
    });
});
