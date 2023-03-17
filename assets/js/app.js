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
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
    animateOut: "fadeOut",
    autoplay: true,
    onInitialized: function () {
      if ($(".owl-item.active video", this.$element).length) {
        $(".owl-item.active video", this.$element)[0].play();
        owl.trigger("stop.owl.autoplay");
        $(".owl-item.active video", this.$element).on("ended", function () {
          owl.trigger("play.owl.autoplay");
        });
      }
    },
    onTranslated: function () {
      if ($(".owl-item.active video", this.$element).length) {
        $(".owl-item.active video", this.$element)[0].play();
        owl.trigger("stop.owl.autoplay");
        $(".owl-item.active video", this.$element).on("ended", function () {
          owl.trigger("play.owl.autoplay");
        });
      }
    },
    // navText: ["", ""],
  });
});

$(".next_button").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".prev_button").click(function () {
  owl.trigger("prev.owl.carousel");
});
