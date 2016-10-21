$(document).on('ready', function() {

	// Hide/Show Grid Overlay
	// -------------------------------------------------------------------------
	$(window).on('keydown', function (e) {
		if (e.which === 71) {
			console.log("G pressed");
			$('.grid').toggleClass('show');
		}
	});

	// Toggle Nav
	// -------------------------------------------------------------------------
	$('body').on("click", '.nav__toggle', function (e) {
		e.preventDefault();
		$('.rail--right').toggleClass('nav-open');
	});

	// Scroll To Page Position
	// -------------------------------------------------------------------------
	$('a[data-scrollto*="#"]').click(function(e) {
		e.preventDefault();
		var target = $(this).attr('data-scrollto');
		$(target).ScrollTo({ duration: 2000 });
	});
	// $('a[href*="#"]:not([href="#"])').click(function(e) {

	// On Scroll Events
	// -------------------------------------------------------------------------
	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();

		// Hide/Show Rails
		// ---------------------------------------------------------------------
		var lastScrollTop = 0;
		var st = this.pageYOffset || this.scrollTop;
		if (st > lastScrollTop){
			// downscroll code
			if ($(window).width() < 1280) {
				$('.rail').addClass('out');
			}
			$('.nav').removeClass('open');
		} else {
			// upscroll code
			$('.rail').removeClass('out');
		}
		lastScrollTop = st;
	});

});
