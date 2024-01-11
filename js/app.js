;
(function($) {
	"use strict";

	$(document).ready(function() {

		var $win = $(window);
		var $doc = $(document);

		// Load Foundation
		$(document).foundation();

		// Intro Small
		$('.intro-small .intro-image').stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});

		// Add end class to doctors
		$(".box-item > .row > .columns").last().addClass("end");

		//FullSize Image
		var attrSrc;

		function fullsizeImageHelper() {
			$('.fullsize-image').each(function() {
				attrSrc = $(this).attr('src');
				$(this)
					.closest('.fullsize-image-container')
					.css('background-image', 'url(' + attrSrc + ')');
			});
		}

		fullsizeImageHelper();

		// Home Page Teaser / Slider
		var swiper = new Swiper('.teaser .swiper-container', {
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		// Taxonomy Slider
		var swiper = new Swiper('.taxonomy-slider .swiper-container', {
			slidesPerView: 2,
			spaceBetween: 1,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'progressbar',
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 1,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 1,
				},
				1024: {
					slidesPerView: 6,
					spaceBetween: 1,
				},
			}
		});

		// Testimonials slider
		var swiper = new Swiper('.testimonials-slider .swiper-container', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		// Tabs
		var currentItem;
		$('.tabs-clickable .list-services a').on('click', function(event) {
			event.preventDefault();

			currentItem = $(this).attr('href');

			$(this)
				.parent()
				.addClass('current')
				.siblings()
				.removeClass('current');

			$(currentItem)
				.addClass('current')
				.siblings()
				.removeClass('current');

		});

		// FitVids
		$('.service-video').fitVids();

		var $video;
		$('video').click(function(event) {
			event.preventDefault();
			$video = $(this);

			$video.addClass('active');

			if ($video.get(0).paused) {
				$video.get(0).play()
				$video.next().fadeOut()
			} else {
				$video.get(0).pause();
				$video.next().show()
			}
		});

		// Tablet Nav
		$('.nav li').each(function() {
			if ($(this).find('.nav-dropdown').length) {
				$(this).addClass('has-dropdown');
			}
		});

		// Tablet and mobile menu dropdowns
		var $listItem;
		var $navClicked = false;
		$('.nav li.has-dropdown > a').on('click', function(event) {
			$listItem = $(this).parent();
			if ($win.width() < 1025) {
				if ($navClicked == true) {
					$navClicked = false;
				} else {
					event.preventDefault();
					$navClicked = true;
				}
			}

			$listItem
				.toggleClass('active')
				.siblings()
				.removeClass('active');

			if ($win.width() < 768) {
				$listItem
					.children('.nav-dropdown')
					.slideToggle();
			}
		});

		// Google Maps
		if ($('.wplook-google-map').length > 0) {
			$('.wplook-google-map').each(function(index, element) {
				$(element).wplGoogleMaps();
			});
		}

		// Mobile Nav
		$('.btn-menu').on('click', function(event) {
			event.preventDefault();
			$(this)
				.toggleClass('active');
			$('.nav').slideToggle();
			$('.nav-dropdown').slideUp();
		});

		var isMobileWidth = false;

		function resizeHelper() {
			if ($win.width() < 768) {
				if (isMobileWidth) {
					return;
				}

				isMobileWidth = true;

			} else {
				if (!isMobileWidth) {
					return;
				}

				isMobileWidth = false;
				$('.nav').show();
				$('.nav-dropdown').removeAttr('style');
			}
		}

		$(function() {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 300
			});
		});

		// Mark last row of elements
		$('.widget-services.page .list-services li').slice(-$('.widget-services.page .list-services li').length % 5).addClass('last-row');
	});
})(jQuery);