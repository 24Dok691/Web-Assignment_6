$(document).ready(function () {
  $("#hide-btn").click(function () { $("#vis-text").hide(); });
  $("#show-btn").click(function () { $("#vis-text").show(); });
  $("#toggle-btn").click(function () { $("#vis-text").toggle(); });

  $("#fadein-btn").click(function () { $("#fade-img").fadeIn(); });
  $("#fadeout-btn").click(function () { $("#fade-img").fadeOut(); });
  $("#fadetoggle-btn").click(function () { $("#fade-img").fadeToggle(); });

  $("#slideup-btn").click(function () { $("#panel").slideUp(); });
  $("#slidedown-btn").click(function () { $("#panel").slideDown(); });
  $("#slidetoggle-btn").click(function () { $("#panel").slideToggle(); });
});
