jQuery(window).scroll(function( about ) {

    jQuery('.about-img').each(function(about){

    var imagePos = jQuery(this).offset().top;



    var topOfWindow = jQuery(window).scrollTop();

      if (imagePos < topOfWindow+300) {

        jQuery(this).addClass("fadeIn");

      }

    });

});

jQuery(document).ready(function(){
  jQuery('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var jQuerytarget = jQuery(target);

      jQuery('html, body').stop().animate({
          'scrollTop': jQuerytarget.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});


