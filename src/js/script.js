const faqContainer = document.querySelector(".faq-questions");
console.log(faqContainer);

faqContainer.addEventListener("click", function (e) {
    const questionContainer = e.target.closest(".faq-questions__question");

    if (!questionContainer) {
        return;
    }

    const faqAnswer = questionContainer.querySelector(".question__answer");
    faqAnswer.classList.toggle("hidden");

    const faqIcon = questionContainer.querySelector(".ph");
    faqIcon.classList = "";
    faqIcon.classList = faqAnswer.classList.contains("hidden")
        ? "ph ph-plus"
        : "ph ph-minus";
});
