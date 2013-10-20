/*global $:true*/

$(document).ready(function() {

	"use strict";

	// Set up link reveal for index anchor link.
	$(".index").waypoint(function (direction) {
		if (direction == "down") {
			$("body").addClass("index-offscreen");
		} else {
			$("body").removeClass("index-offscreen");
		}
	});

	// Setup stickiness of page header.
	$(".header").waypoint(function (direction) {
		if (direction =="down") {
			$(".header").addClass("sticky");
		} else {
			$(".header").removeClass("sticky");
		}
	}, {offset:-1});

});