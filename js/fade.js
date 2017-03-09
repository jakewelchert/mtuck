$(document).ready(function(){

  // fade in and out header image
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('.headline').fadeOut();
      } else {
        $('.headline').fadeIn();
      }
    });
  });
});