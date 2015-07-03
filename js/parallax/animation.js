

jQuery(window).scroll(function( about ) {

    jQuery('#about-animation').each(function(about){

    var imagePos = jQuery(this).offset().top;



    var topOfWindow = jQuery(window).scrollTop();

      if (imagePos < topOfWindow+600) {

        jQuery(this).addClass("expandUp");

      }

    });

  });



jQuery(window).scroll(function( about ) {

    jQuery('#who-v-animation').each(function(about){

    var imagePoss = jQuery(this).offset().top;



    var topOfWindoww = jQuery(window).scrollTop();

      if (imagePoss < topOfWindoww+1500) {

        jQuery(this).addClass("expandUp");

      }

    });

  });



