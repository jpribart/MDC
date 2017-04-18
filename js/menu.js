$(function(){
  $('.toggle-nav').click(function (e) {
    e.stopPropagation();
    toggleNav();
  });
  $('#main').click(function (e) {
    var target = $(e.target);
    if(!target.closest('#menu').length && $('#wrapper-nav').hasClass('show-nav')) toggleNav();
  });
  function toggleNav() {
    if($('#wrapper-nav').hasClass('show-nav')) {
      $('#wrapper-nav').removeClass('show-nav');
    } else {
      ($('#wrapper-nav').addClass('show-nav'))
    }
  }
});

$(function() {
$.fn.menumaker = function() {  
  return this.each(function() {
    $(this).find(".btn-responsive").on('click', function(){
      $(this).toggleClass('menu-opened');
      var mainmenu = $(this).next('ul');
    });
  });
};
})(jQuery);

$(function(){
$(document).ready(function(){
$("#menu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);