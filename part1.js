$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#text-btn").click(function () {
    $("#sel-title").text("Text changed with .text()");
  });

  $("#html-btn").click(function () {
    $(".sel-item").html("<b>HTML</b> changed with <i>.html()</i>");
  });

  $("#css-btn").click(function () {
    $("span").css({ color: "#B08968", "font-size": "28px", "font-weight": "bold" });
    $("#sel-demo").css("background-color", "#FAF6EF");
  });
});
