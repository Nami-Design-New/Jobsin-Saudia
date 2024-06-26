// testimonials slider
let testimonials = new Swiper(".testimonilas", {
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
  },
});

var companies = new Swiper(".companies_grid", {
  loop: true,
  spaceBetween: 16,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 2,
    },
  },
});
var categories = new Swiper(".categories_grid", {
  loop: true,
  spaceBetween: 16,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    350: {
      slidesPerView: 2,
    },
  },
});
var heroSwiper = new Swiper(".heroSection", {
  loop: true,
  spaceBetween: 16,
  speed: 1000,
  pagination: {
    el: ".heroSwiperPagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
});

$(document).ready(function () {
  $(".preloader").delay(500).fadeOut(300);
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

let layer = document.querySelector(".layer");
let toggler = document.querySelector(".toggler");
let menu = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("hihglight");
  menu.classList.toggle("show");
  layer.classList.toggle("show");
});
document.querySelectorAll(".nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    toggler.classList.remove("hihglight");
    menu.classList.remove("show");
    layer.classList.remove("show");
  });
});
document.addEventListener("click", function (event) {
  if (
    menu.classList.contains("show") &&
    !event.target.closest(".nav-links") &&
    !event.target.closest(".toggler")
  ) {
    menu.classList.remove("show");
    layer.classList.remove("show");
  }
});
// nav bar fixed up
let header = document.querySelector("header");
let body = document.querySelector("body");
window.addEventListener("scroll", () => {
  if (this.scrollY > 160) {
    header.classList.add("sticky");
    body.style.padding = "80px 0 0";
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

// let searchOpen = document.getElementById("searchOpen");
// let searchContainer = document.querySelector(".search-container");
// let closeSearch = document.querySelector(".closeSearch");
// searchOpen.addEventListener("click", () => {
//   searchContainer.classList.add("show");
//   layer.classList.add("show");
// });
// closeSearch.addEventListener("click", () => {
//   searchContainer.classList.remove("show");
//   layer.classList.remove("show");
// });

// profile menu
let showBtn = document.getElementById("showProfile");
let profileMenu = document.querySelector(".profile_menu");

showBtn?.addEventListener("click", () => {
  profileMenu.classList.toggle("show");
  layer.classList.toggle("show");
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
    layer.classList.remove("show");
  }
});

const promoteModal = document.querySelector(`.promoteModal`);
const promoteModalBody = document.querySelector(`.promoteModal`);
const promoteModalCloseBtn = document.querySelector(
  `.promoteModal .modalBody .closeBtn`
);

window.addEventListener("load", () => {
  setTimeout(function () {
    promoteModal?.classList.add("show");
  }, 3000);
});

promoteModalCloseBtn?.addEventListener("click", () => {
  promoteModal?.classList.remove("show");
});

document.addEventListener(
  "click",
  (e) => {
    if (
      e.target.contains(promoteModalBody) &&
      promoteModal?.classList.contains("show")
    ) {
      promoteModal?.classList.remove("show");
    }
  },
  true
);




// profile Image Input
$(document).ready(function () {
  $(".profileImageInput").on("change", function (event) {
    const file = event.target.files[0];
    const $preview = $(this)
      .siblings(".profileImageLabel")
      .find(".profileImagePreview");
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $preview.attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
});
