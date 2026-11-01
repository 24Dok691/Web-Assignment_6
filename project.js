$(document).ready(function () {
  $(".acc-title").click(function () {
    const body = $(this).next(".acc-body");
    $(".acc-body").not(body).slideUp();
    body.slideToggle();
  });
});
