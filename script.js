const listEl = document.querySelectorAll(".list");
const sectionEl = document.querySelectorAll(".section");
const shoping = document.querySelector(".shoping");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const CART = document.querySelector(".cart");
const boxes = document.querySelectorAll(".boxes");
const footerEl = document.querySelector("footer");
const welcome = document.querySelector(".welcome");
const demo = document.querySelector(".demo");
const movie = document.querySelector(".movie");
const closeIcon = document.querySelector(".close-icon");
const addminus = document.querySelectorAll(".addminus");
const Video = document.querySelector("video");

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

demo.addEventListener("click", function () {
  movie.style.display = "flex";
  // shoping.style.visibility = "hidden";
});

closeIcon.addEventListener("click", function () {
  movie.style.display = "none";
  Video.pause();
  Video.currentTime = 0;
});
