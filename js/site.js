// var MakerPark = {};

$(document).on('ready', function() {

	// Hide/Show Grid Overlay
	// -------------------------------------------------------------------------
	$(window).on('keydown', function (e) {
		if (e.which === 71) { $('.grid').toggleClass('show'); }
	});

	// Toggle Nav
	// -------------------------------------------------------------------------
	$('body').on("click", '.nav__toggle', function (e) {
		e.preventDefault();
		if ( $('.nav-open').length === 0 && $(window).width() >= 1920 ) {
			var nw = 1248;
			var r = ($(window).width() - nw) / 2;
			console.log('window width: ' + $(window).width());
			console.log('nav width: ' + nw);
			$('.rail--right').addClass('nav-open');
			if (s) {
				$('.nav').css('background-color', s.current.computedColor);
			}
			$('.nav').find('.nav__list').css('right', r);
		}
		else if ( $('.nav-open').length === 0 && $(window).width() >= 1440 ) {
			var nw = 1128;
			var r = ($(window).width() - nw) / 2;
			console.log('window width: ' + $(window).width());
			console.log('nav width: ' + nw);
			$('.rail--right').addClass('nav-open');
			if (s) {
				$('.nav').css('background-color', s.current.computedColor);
			}
			$('.nav').find('.nav__list').css('right', r);
		}
		else if ( $('.nav-open').length === 0 && $(window).width() >= 1280 ) {
			var nw = 948;
			var r = ($(window).width() - nw) / 2;
			console.log('window width: ' + $(window).width());
			console.log('nav width: ' + nw);
			$('.rail--right').addClass('nav-open');
			if (s) {
				$('.nav').css('background-color', s.current.computedColor);
			}
			$('.nav').find('.nav__list').css('right', r);
		}
		else if ( $('.nav-open').length === 0 && $(window).width() >= 1024 ) {
			var nw = 768;
			var r = ($(window).width() - nw) / 2;
			console.log('window width: ' + $(window).width());
			console.log('nav width: ' + nw);
			$('.rail--right').addClass('nav-open');
			if (s) {
				$('.nav').css('background-color', s.current.computedColor);
			}
			$('.nav').find('.nav__list').css('right', r);
		}
		else if ( $('.nav-open').length === 0 && $(window).width() >= 768 ) {
			var nw = 504;
			var r = ($(window).width() - nw) / 2;
			console.log('window width: ' + $(window).width());
			console.log('nav width: ' + nw);
			$('.rail--right').addClass('nav-open');
			if (s) {
				$('.nav').css('background-color', s.current.computedColor);
			}
			$('.nav').find('.nav__list').css('right', r);
		}
		else if ( $('.nav-open').length === 0 && $(window).width() < 768 ) {
			var nw = 312;
			var r = ($(window).width() - nw) / 2;
			console.log('window width: ' + $(window).width());
			console.log('nav width: ' + nw);
			$('.rail--right').addClass('nav-open');
			if (s) {
				$('.nav').css('background-color', s.current.computedColor);
			}
			$('.nav').find('.nav__list').css('right', r);
		}
		// else if ( $('.nav-open').length === 0 && $(window).width() > 1280 ) {
		// 	$('.rail--right').addClass('nav-open');
		// }
		else if ($('.nav-open').length > 0) {
			$('.rail--right').removeClass('nav-open');
			$('.nav').css('background-color', '');
			$('.nav').find('.nav__list').attr('style', '');
		}
	});

	// Scroll To Page Position
	// -------------------------------------------------------------------------
	$('a[data-scrollto*="#"]').click(function(e) {
		if ($('.front-page').length > 0) {
			e.preventDefault();
		}
		if ($('.nav-open').length > 0) {
			$('.rail--right').removeClass('nav-open');
			$('.nav').find('.nav__list').attr('style', '');
		}
		var target = $(this).attr('data-scrollto');
		$(target).ScrollTo({ duration: 2000 });
	});
	// $('a[href*="#"]:not([href="#"])').click(function(e) {

	// On Scroll Events
	// -------------------------------------------------------------------------
	var $prevScroll = 0;
	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();

		// Hide/Show Rails
		// ---------------------------------------------------------------------
		if ($scroll > $prevScroll){
			// downscroll code
			if ($(window).width() < 1280) {
				$('.rail').addClass('out');
			}
			$('.rail--right').removeClass('nav-open');
			$('.nav').find('.nav__list').attr('style', '');
		} else {
			// upscroll code
			$('.rail').removeClass('out');
		}
		$prevScroll = $scroll;
	});

});
