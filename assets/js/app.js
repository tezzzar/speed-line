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
    loop: true,
    animateOut: "fadeOut",
    // navText: ["", ""],
  });
});

$(".next_button").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".prev_button").click(function () {
  owl.trigger("prev.owl.carousel");
});
