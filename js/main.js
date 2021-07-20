$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    var $hero = $(".hero");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $hero.height());
  });
});
