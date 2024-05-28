document.addEventListener("DOMContentLoaded", function () {
  const accordeon = document.querySelector(".accordeon");
  const accordeonTitles = accordeon.querySelectorAll(".accordeon_title");

  accordeonTitles.forEach(function (accordeonTitle) {
    accordeonTitle.addEventListener("click", function () {
      const currentText = accordeonTitle.nextElementSibling; // Select the next sibling element
      accordeonTitle.classList.toggle("accordeon_title--active");
      currentText.classList.toggle("accordeon_text--visible");
    });
  });
});
