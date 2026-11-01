$(document).ready(function () {
  let count = $("#item-list li").length;

  $("#append-btn").click(function () {
    count++;
    $("#item-list").append("<li>Item " + count + "</li>");
  });

  $("#prepend-btn").click(function () {
    count++;
    $("#item-list").prepend("<li>Item " + count + "</li>");
  });

  $("#remove-btn").click(function () {
    $("#item-list li:last").remove();
  });

  const images = ["https://picsum.photos/id/10/400/250", "https://picsum.photos/id/29/400/250"];
  let imgIndex = 0;
  $("#src-btn").click(function () {
    imgIndex = (imgIndex + 1) % images.length;
    $("#attr-img").attr("src", images[imgIndex]);
  });

  const links = ["https://jquery.com", "https://api.jquery.com"];
  let linkIndex = 0;
  $("#href-btn").click(function () {
    linkIndex = (linkIndex + 1) % links.length;
    $("#attr-link").attr("href", links[linkIndex]).text(links[linkIndex].replace("https://", ""));
    $("#href-output").text($("#attr-link").attr("href"));
  });

  $("#name-input").on("input", function () {
    $("#live-output").text($(this).val() || "-");
  });

  $("#email-input").on("input", function () {
    $("#live-email").text($(this).val() || "-");
  });
});
