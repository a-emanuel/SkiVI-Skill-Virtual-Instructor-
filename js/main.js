const toggleButton = document.getElementById("nav-menu-btn");
const toggleButton2 = document.getElementById("nav-menu-btn2");
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  toggleButton.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
  })
);

collapsibles.forEach((item) =>
  toggleButton2.addEventListener("click", function () {
    item.classList.toggle("nav--expanded");
  })
);
