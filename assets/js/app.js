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

// profile menu
let showBtn = document.getElementById("showProfile");
let profileMenu = document.querySelector(".profile_menu");

showBtn.addEventListener("click", () => {
  profileMenu.classList.toggle("show");
  if (profileMenu.classList.contains("show")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "auto";
  }
});

document.addEventListener("click", function (event) {
  if (
    profileMenu.classList.contains("show") &&
    !event.target.closest(".profile_menu") &&
    !event.target.closest("#showProfile")
  ) {
    profileMenu.classList.remove("show");
  }
});
// testimonials slider
let testimonials = new Swiper(".testimonilas", {
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true
  },
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
    }
  }
});

var companies = new Swiper(".companies_grid", {
  loop: true,
  spaceBetween: 16,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true
  },
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    992: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 3
    },
    350: {
      slidesPerView: 2
    }
  }
});
var categories = new Swiper(".categories_grid", {
  loop: true,
  spaceBetween: 16,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true
  },
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    992: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3
    },
    350: {
      slidesPerView: 2
    }
  }
});
