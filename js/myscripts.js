(function($) {
$(function() {

  $('#bot').click(function() {
    $('body,html').animate({scrollBottom:-10},500);
    return false;
  })

})
})(jQuery)