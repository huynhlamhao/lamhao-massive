window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 0);
});
var $item = $(".carousel-item");
var $wHeight = $(window).height();
$item.eq(0).addClass("active");
$item.height($wHeight);
$item.addClass("full-screen");

$(".carousel img").each(function () {
   var $src = $(this).attr("src");
   var $color = $(this).attr("data-color");
   $(this)
      .parent()
      .css({
         "background-image": "url(" + $src + ")",
         "background-color": $color,
      });
   $(this).remove();
});

$(window).on("resize", function () {
   $wHeight = $(window).height();
   $item.height($wHeight);
});

$(".carousel").carousel({
   interval: 6000,
   pause: "false",
});
