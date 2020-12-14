$(function(){
  var pagetop = $('#page_top');
  var h = $(window).height();
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > h) {
         pagetop.fadeIn();
      } else {
         pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});