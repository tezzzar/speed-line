// SLIDER -------------------------------------------

$(document).ready(function () {
  $(".slider-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    merge: true,
    loop: true,
    video: true,
    lazyLoad: true,
    pause: "hover",
    animateOut: "fadeOut",
    // autoplay: true,
    // autoplayTimeout: 7500, //Время смены слайда
    // onInitialized: function () {
    //   if ($(".owl-item.active video", this.$element).length) {
    //     $(".owl-item.active video", this.$element)[0].play();
    //     owl.trigger("stop.owl.autoplay");
    //     $(".owl-item.active video", this.$element).on("ended", function () {
    //       owl.trigger("play.owl.autoplay");
    //     });
    //   }
    // },
    // onTranslated: function () {
    //   if ($(".owl-item.active video", this.$element).length) {
    //     $(".owl-item.active video", this.$element)[0].play();
    //     owl.trigger("stop.owl.autoplay");
    //     $(".owl-item.active video", this.$element).on("ended", function () {
    //       owl.trigger("play.owl.autoplay");
    //     });
    //   }
    // },
  });

  // $(window).on("load", function () {
  $(".catalog-carousel").owlCarousel({
    items: 5,
    loop: true, //Зацикливаем слайдер
    margin: 15, //Отступ от картино если выводите больше 1
    // nav: true,
    // dots: true,
    // autoplay: true, //Автозапуск слайдера
    // smartSpeed: 2000, //Время движения слайда
    // autoplayTimeout: 4000, //Время смены слайда
    // responsiveClass: true,
    // responsiveBaseElement: "main",
    responsive: {
      0: {
        items: 2,
        nav: true,
        dots: false,
      },
      768: {
        items: 3,
        nav: true,
        dots: true,
      },
      1024: {
        items: 4,
        nav: true,
        dots: true,
        // margin: 25,
      },
      1440: {
        items: 5,
        nav: true,
        dots: true,
      },
    },
  });
  // });
});

// $(document).ready(function () {
//   $(".catalog-carousel").owlCarousel({
//     loop: true, //включаем бесконечную прокрутку
//     nav: true, // пишем это вместо "navigation" и включаем кнопки 'prev' и 'next'
//     navText: [
//       "<i class='fa fa-chevron-left'></i>",
//       "<i class='fa fa-chevron-right'></i>",
//     ], // пишем это вместо "navigationText" и подключаем свои кнопки
//     dots: false, // вместо "pagination", отключаем точки
//     autoplay: true, // включаем автопрокрутку
//     autoplaySpeed: 500, // пишем это вместо "slideSpeed" и задаем скорость прокрутки
//     responsiveClass: true,
//     center: true,
//     responsive: {
//       0: {
//         items: 0, // от 0px до 599px слайдов нет
//       },
//       600: {
//         items: 1, // от 600px до 899px один слайд
//       },
//       900: {
//         items: 2, // от 900px до 1199px два слайда
//       },
//       1200: {
//         items: 3, // от 1200px и больше три слайда
//       },
//     },
//   });
// });

// DROPDOWN-MENU -----------------------------------

var dropdown = document.getElementById("dropdown");
var toggle = document.getElementById("toggle");

function toggleDropdown() {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}
document.addEventListener("click", function (event) {
  if (!toggle.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

// Burger menu --------------------------------------------

let menuBtn = document.querySelector(".menu-btn");
let burgerMenu = document.querySelector(".burger-menu");
let burgerSubMenu = document.querySelector(".burger_menu_submenu");
let burgMenuItem_1 = document.getElementById("burg_menu_1");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
burgMenuItem_1.addEventListener("click", function () {
  burgerSubMenu.classList.toggle("active");
});

$(document).ready(function () {
  $(burgMenuItem_1).click(function (e) {
    e.preventDefault();
    $(this).children(burgerSubMenu).slideToggle();
  });
});

// --------------Button Up---------------------------

const scrollTrigger = 1.5;
const btnUp = {
  el: document.querySelector(".button-top"),
  show() {
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > window.innerHeight * scrollTrigger ? this.show() : this.hide();
    });
    document.querySelector(".button-top").onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};
btnUp.addEventListener();
