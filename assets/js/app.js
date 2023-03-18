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

// SLIDER -------------------------------------------

$(document).ready(function () {
  $("#slider-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    merge: true,
    loop: true,
    video: true,
    lazyLoad: true,
    center: true,
    animateOut: "fadeOut",
    // autoplay: true,
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
    // navText: ["", ""],
  });
  $("#catalog-carousel").owlCarousel({
    items: 5,
    loop: true, //Зацикливаем слайдер
    margin: 15, //Отступ от картино если выводите больше 1
    nav: true,
    dots: true,
    autoplay: true, //Автозапуск слайдера
    smartSpeed: 2000, //Время движения слайда
    autoplayTimeout: 4000, //Время смены слайда
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   600: {
    //     items: 2,
    //   },
    //   1000: {
    //     items: 5,
    //   },
    // },
  });
});
