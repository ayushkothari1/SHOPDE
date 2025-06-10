const listEl = document.querySelectorAll(".list");
const sectionEl = document.querySelectorAll(".section");
const section2 = document.querySelector(".section2");
const CART = document.querySelector(".cart");
const boxes = document.querySelectorAll(".boxes");
const footerEl = document.querySelector("footer");
const welcome = document.querySelector(".welcome");
const addminus = document.querySelectorAll(".addminus");

listEl.forEach(function (list, index) {
  list.addEventListener("click", function (e) {
    listEl.forEach(function (innerTab) {
      innerTab.classList.remove("list-active");
    });
    welcome.style.display = "none";
    list.classList.add("list-active");
    footerEl.style.display = "flex";
    sectionEl.forEach(function (section) {
      section.style.display = "none";
      section.classList.remove("active-section");
    });
    sectionEl[index].classList.add("active-section");
    sectionEl[index].style.display = "block";
  });
});

addminus.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.classList.contains("minus")) {
      e.classList.remove("minus");
      e.innerHTML = "ADD TO CART";
    } else {
      e.classList.add("minus");
      e.innerHTML = "Remove Item";
    }
  });
});
