$(document).on('ready', function() {

	$(window).on('keydown', function (e) {
		if (e.which === 71) {
			console.log("G pressed");
			$('.grid').toggleClass('show');
		}
	});
	// -------------------------------------------------------------------------
	// open nav
	$('body').on("click", '.nav__toggle', function (e) {
		e.preventDefault();
		$('.rail--right').toggleClass('nav-open');
	});
	// -------------------------------------------------------------------------
	// slick site image gallery
	$('.carousel.site-photos').slick({
		infinite: true,
		speed: 500,
		arrows: true,
		pauseOnHover: false,
		adaptiveHeight: true
	});
	// -------------------------------------------------------------------------
	// slick timeline gallery
	$('.timeline-carousel').slick({
		infinite: true,
		speed: 500,
		arrows: true,
		dots: true,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 1023,
			settings: { dots: false }
		}]
	});
	// -------------------------------------------------------------------------
	// animate smooth scroll to links w/in page
	// $('a[href*="#"]:not([href="#"])').click(function(e) {
	if ($('.front-page').length > 0) {
		$('a[data-scrollto*="#"]').click(function(e) {
			e.preventDefault();
			var target = $(this).attr('data-scrollto');
			$(target).ScrollTo();
		});
		$('.logo').addClass('out');
	}
	// -------------------------------------------------------------------------
	// animate smooth scroll to next section on arrow click
	$('body').on('click', '.arrow-down', function(e) {
		e.preventDefault();
		var $next = $currentSection.next('section');
		if (!$next.length > 0) {
			$next = $currentSection.next('footer');
		}
		$next.ScrollTo();
	});
	// -------------------------------------------------------------------------
	// initialize vars
	var $currentSection = $('section.current');
	var $prevSection = null;
	var lastScrollTop = 0;
	var currentBgColor = null;

	// -------------------------------------------------------------------------
	// animate colors

	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();
		// ---------------------------------------------------------------------
		// front page
		if ($('.front-page').length > 0) {
			var $currentTop = $currentSection.offset().top;
			var $currentBottom = $currentSection.offset().top + $currentSection.outerHeight();
			var $currentTitle = $currentSection.find('.title');

			// -----------------------------------------------------------------
			// set currentSection
			if ($currentSection.next('section').length > 0) {
				var $nextTop = $currentSection.next('section').offset().top;
			}
			if ($scroll > ($nextTop - ($(window).height()/2))) {
				$currentSection = $currentSection.next('section');
				$currentTop = $currentSection.offset().top;
				$currentBottom = $currentSection.offset().top + $currentSection.outerHeight();
				$currentTitle = $currentSection.find('.title');
				$('section.current').removeClass('current');
				$currentSection.addClass('current');
			}
			if ($scroll < ($currentTop - ($(window).height()/2))) {
				$currentSection = $currentSection.prev('section');
				$currentTop = $currentSection.offset().top;
				$currentBottom = $currentSection.offset().top + $currentSection.outerHeight();
				$currentTitle = $currentSection.find('.title');
				$('section.current').removeClass('current');
			}

			fadeBg($scroll);

			// -----------------------------------------------------------------
			// make titles stick
			if ($scroll >= ($currentTop - 160)) {
				$('section').find('.title').removeClass('stuck');
				$currentTitle.removeClass('top');
				$currentTitle.addClass('stuck');
			} else if ($scroll < ($currentTop - 160)) {
				$('section').find('.title').removeClass('stuck');
				$currentTitle.removeClass('stuck');
				$currentTitle.addClass('top');
			}
			if ($scroll >= ($currentBottom - $(window).height() + 160)) {
				$('section').find('.title').removeClass('stuck');
				$currentTitle.removeClass('stuck');
				$currentTitle.addClass('bottom');
			}
			else if ($scroll < ($currentBottom - $(window).height() + 160) && $scroll >= ($currentTop - 160)) {
				$('section').find('.title').removeClass('stuck');
				$currentTitle.removeClass('bottom');
				$currentTitle.addClass('stuck');
			}
			// -----------------------------------------------------------------
			// show and hide logo (right rail), scrolling from hero
			if ( $scroll > ($(window).height() * 1.4) ) {
				$('.logo').removeClass('out');
			}
			else if ( $scroll < ($(window).height() * 1.4) ) {
				$('.logo').addClass('out');
			}
		}
		// ---------------------------------------------------------------------
		// hide rails on downscroll
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
		// ---------------------------------------------------------------------
		// show and hide arrows (bottom left)
		var $footerTop = $('.footer').offset().top;
		if ($scroll > ($footerTop - $(window).height())) {
			$('.arrow-down').addClass('hidden');
		}
		else if ($scroll < ($footerTop - $(window).height())) {
			$('.arrow-down').removeClass('hidden');
		}
	});

	// -------------------------------------------------------------------------
	// background color transitions FUNCTION
	var prevColoredSection = null;
	function fadeBg($scroll) {
		var bgAnimationSpeed = 300;
		if (prevColoredSection != $currentSection) {
			switch($currentSection.attr('id')) {
				case 'mission':
					if (prevColoredSection != null && prevColoredSection.attr('id') === 'about') {
						$('.bg').animate({
							backgroundColor: 'rgb(216, 242, 130)'
						}, bgAnimationSpeed);
					}
					break;
				case 'about':
					$('.bg').animate({
						backgroundColor: 'rgb(152, 240, 200)'
					}, bgAnimationSpeed);
					break;
				case 'vision':
					$('.bg').animate({
						backgroundColor: 'rgb(145, 230, 223)'
					}, bgAnimationSpeed);
					break;
				case 'timeline':
					$('.bg').animate({
						backgroundColor: 'rgb(168, 197, 255)'
					}, bgAnimationSpeed);
					break;
				case 'principles':
					$('.bg').animate({
						backgroundColor: 'rgb(200, 176, 255)'
					}, bgAnimationSpeed);
					break;
				case 'join':
					$('.bg').animate({
						backgroundColor: 'rgb(255, 148, 189)'
					}, bgAnimationSpeed);
					break;
				case 'news':
					$('.bg').animate({
						backgroundColor: 'rgb(255, 125, 129)'
					}, bgAnimationSpeed);
					break;
				case 'team':
					$('.bg').animate({
						backgroundColor: 'rgb(255, 128, 83)'
					}, bgAnimationSpeed);
					break;
			}
		}
		// mission bg transitions
		if ($scroll > $(window).height() && $scroll < ($(window).height()*1.5) ) {
			$('.bg').css('background-color', 'rgb(216, 242, 130)');
			$('.mission-section').css('background-color', 'transparent');
		}
		else if ($scroll < $(window).height()) {
			$('.mission-section').css('background-color', 'rgb(216, 242, 130)');
			$('.bg').css('background-color', 'transparent');
		}
		// footer bg transitions
		var footerTop = $('.footer').offset().top;
		var teamTop = $('.team-section').offset().top;
		if ($scroll > (footerTop - $(window).height()) ) {
			$('.team-section').css('background-color', 'rgb(255, 128, 83)');
			$('.bg').css('background-color', 'transparent');
		}
		else if ($scroll < (footerTop - $(window).height()) && $scroll > teamTop ) {
			$('.team-section').css('background-color', 'transparent');
			$('.bg').css('background-color', 'rgb(255, 128, 83)');
		}
		prevColoredSection = $currentSection;
	}
});
