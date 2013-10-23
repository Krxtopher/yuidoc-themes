(function($) {

  "use strict";

  $.fn.addClassWhenItemAboveViewport = function(className, triggerElement, offset) {

    var target = this;
    if (offset === undefined) offset = 0;
    var triggerElementPosition = $(triggerElement).offset().top;

    $(window).scroll(function () {
      if ($(window).scrollTop() > triggerElementPosition - offset) {
        target.addClass(className);
      } else {
        target.removeClass(className);
      }
    });

    return this;

  };

}(jQuery));