$(document).ready(function () {
  const start = { left: 10, top: 10, width: 60, height: 60, opacity: 1 };

  $("#anim1-btn").click(function () {
    $("#box1").animate({ width: "120px", height: "120px", left: "150px", top: "50px" }, 1000);
  });
  $("#reset1-btn").click(function () {
    $("#box1").stop(true).css(start);
  });

  $("#anim2-btn").click(function () {
    $("#box2")
      .stop(true)
      .animate({ left: "200px" }, 700)
      .animate({ top: "130px" }, 700)
      .animate({ width: "30px", height: "30px" }, 700)
      .animate({ left: "10px", top: "10px", width: "60px", height: "60px" }, 700);
  });

  $("#anim3-btn").click(function () {
    $("#box3").animate({ opacity: 0.3, width: "120px", height: "120px", left: "250px", top: "50px" }, 1500);
  });
  $("#reset3-btn").click(function () {
    $("#box3").stop(true).css(start);
  });
});
