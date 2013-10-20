/*global $:true*/

$(document).ready(function() {

	"use strict";

	$(window).scroll(function() {
		
		for (var i = scrollDetectors.length - 1; i >= 0; i--) {
			scrollDetectors[i]();
		}

	});

	var scrollDetectors = [];

	function addOffscreenTopDetector(triggerItemSelector, styleTargetSelector, styleName) {

		var triggerItem$ = $(triggerItemSelector);
		var triggerItemBottom = triggerItem$.offset().top + triggerItem$.height();

		var detector = function() {

			var windowScrollPosition = $(window).scrollTop();

			if (windowScrollPosition > triggerItemBottom) {
				$(styleTargetSelector).addClass(styleName);
			} else {
				$(styleTargetSelector).removeClass(styleName);
			}

		};

		scrollDetectors.push(detector);

	}

	function addLeavingScreenTopDetector(triggerItemSelector, styleTargetSelector, styleName) {

		var triggerItem$ = $(triggerItemSelector);
		var triggerItemTop = triggerItem$.offset().top;

		var detector = function() {

			var windowScrollPosition = $(window).scrollTop();
			
			if (windowScrollPosition > triggerItemTop) {
				$(styleTargetSelector).addClass(styleName);
			} else {
				$(styleTargetSelector).removeClass(styleName);
			}

		};

		scrollDetectors.push(detector);

	}

	// Setup

	addOffscreenTopDetector(".index-section", "body", "offscreen-top-index-section");
	addLeavingScreenTopDetector(".header", ".header", "sticky");

});