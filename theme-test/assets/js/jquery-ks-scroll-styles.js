(function($) {

  "use strict";

  $.fn.addClassWhenItemAboveViewport = function(className, triggerElement, offset) {

    var scrollUpdateNeeded = false;

    var target = this;
    if (offset === undefined) offset = 0;
    var triggerElementPosition = $(triggerElement).offset().top;

    $(window).scroll(function () {

      if (!scrollUpdateNeeded) {

        scrollUpdateNeeded = true;

        setTimeout(function () {

          scrollUpdateNeeded = false;
          
          if ($(window).scrollTop() > triggerElementPosition - offset) {
            target.addClass(className);
          } else {
            target.removeClass(className);
          }
         } , 33);
      }
      
    });

    return this;

  };

}(jQuery));