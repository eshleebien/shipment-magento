
jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    console.log(scroll);
    if(scroll > -1) {
        jQuery(".middle-clouds")
            .css({"transform":"translateY("+(scroll*1)+"px) translateZ(1px)"});
    }
});
