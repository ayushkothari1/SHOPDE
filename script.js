const listEl = document.querySelectorAll(".list");
const sectionEl = document.querySelectorAll(".section");
const welcome = document.querySelector(".welcome");

listEl.forEach(function (list, index) {
  list.addEventListener("click", function (e) {
    listEl.forEach(function (innerTab) {
      innerTab.classList.remove("list-active");
    });
    welcome.style.display = "none";
    list.classList.add("list-active");
    sectionEl.forEach(function (section) {
      section.style.display = "none";
      section.classList.remove("active-section");
    });
    sectionEl[index].classList.add("active-section");
    sectionEl[index].style.display = "block";
  });
});
