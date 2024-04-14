$(document).ready(function () {
  $(".preloader").delay(1200).fadeOut(300);
});
document
  .getElementById("showNotification")
  .addEventListener("click", function () {
    document.querySelector(".notification_dropDown").classList.toggle("show");
  });

document.addEventListener("click", function (event) {
  const notificationDropDown = document.querySelector(".notification_dropDown");
  if (
    notificationDropDown.classList.contains("show") &&
    !event.target.closest(".notification_dropDown") &&
    !event.target.closest("#showNotification")
  ) {
    notificationDropDown.classList.remove("show");
  }
});

let toggler = document.querySelector(".toggler");
let menu = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("hihglight");
  menu.classList.toggle("show");
});
document.querySelectorAll(".nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    toggler.classList.remove("hihglight");
    menu.classList.remove("show");
  });
});
// nav bar fixed up
let header = document.querySelector("header");
let body = document.querySelector("body");
window.addEventListener("scroll", () => {
  if (this.scrollY > 160) {
    header.classList.add("sticky");
    body.style.padding = "160px 0 0";
  } else {
    header.classList.remove("sticky");
    body.style.padding = "0";
  }
});

function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function unhighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}