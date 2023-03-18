$(document).ready(function () {
  //打开sidebar 
  $('.hamRotate').click(function () {
    $('.sidebar').animate({
      width: 'toggle'
    }, 200);
    $('body').toggleClass("boom_body");
  });
});
