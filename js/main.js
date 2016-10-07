$(document).on('ready', function() {

	$(window).on("keydown", function (e) {
		if (e.which === 71) {
			console.log("G pressed");
			$('.grid').toggleClass('show');
		}
	})

	$('body').on("click", '.nav__toggle', function (e) {
		e.preventDefault();
		$('.nav').toggleClass('open');
	});

	// animate smooth scroll to links w/in page
	$('a[href*="#"]:not([href="#"])').click(function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).ScrollTo();
	});

	// slick image gallery
	$('.image-carousel').slick({
	    infinite: true,
	    // autoplay: true,
	    // autoplaySpeed: 1000,
	    speed: 1000,
	    // fade: true,
	    arrows: true,
	    pauseOnHover: false,
		prevArrow:"<img class='slick-prev' src='../images/arrow.svg'>",
      	nextArrow:"<img class='slick-next' src='../images/arrow.svg'>"
  	});

	// slick timeline gallery
	$('.timeline__container').slick({
		infinite: true,
		speed: 1000,
		arrows: true,
		dots: true,
		pauseOnHover: false,
		prevArrow:"<img class='slick-prev' src='../images/arrow.svg'>",
      	nextArrow:"<img class='slick-next' src='../images/arrow.svg'>"
	});

	// sliding titles
	var $currentSection = $('section.current');
	var $prevSection = null;

	$(window).scroll(function() {
		// console.log($currentSection.attr('class'));
		var $scroll = $(window).scrollTop();
		var $currentTop = $currentSection.offset().top;
		var $currentBottom = $currentSection.offset().top + $currentSection.outerHeight();
		var $currentTitle = $currentSection.find('.title');

		// ------------------------------------------------
		if ($currentSection.next('section').length > 0) {
			var $nextTop = $currentSection.next('section').offset().top;
		}
		else {
			// you are at bottom of page?
		}

		// show and hide logo (bottom right)
		var $visionTop = $('.vision-section').offset().top;
		if ($scroll > ($visionTop - .5*$(window).height())) {
			$('.logo').removeClass('hidden');
		}
		else if ($scroll < ($visionTop - .5*$(window).height())) {
			$('.logo').addClass('hidden');
		}

		// set currentSection
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
			$currentSection.addClass('current');
		}

		// make titles stick
		if ($scroll >= ($currentTop - 160)) {
			// console.log("remove top, add stuck");
			$currentTitle.removeClass('top');
			$currentTitle.addClass('stuck');

		} else if ($scroll < ($currentTop - 160)) {
			// console.log("remove stuck, add top");
			$currentTitle.removeClass('stuck');
			$currentTitle.addClass('top');
		}

		if ($scroll >= ($currentBottom - $(window).height() + 160)) {
			// console.log("bottom reached");
			// console.log("remove stuck, add bottom");
			$currentTitle.removeClass('stuck');
			$currentTitle.addClass('bottom');
		}
		else if ($scroll < ($currentBottom - $(window).height() + 160) && $scroll >= ($currentTop - 160)) {
			// console.log("remove bottom, add stuck");
			$currentTitle.removeClass('bottom');
			$currentTitle.addClass('stuck');
		}

		var $footerTop = $('.footer').offset().top;
		if ($scroll > ($footerTop - $(window).height())) {
			$('.arrow').addClass('hidden');
			// console.log("add hidden");
		}
		else if ($scroll < ($footerTop - $(window).height())) {
			$('.arrow').removeClass('hidden');
			// console.log("remove hidden");
		}
	});
	// animate smooth scroll to next section on arrow click
	$('body').on('click', '.arrow', function(e) {
		e.preventDefault();
		var $next = $currentSection.next('section');
		$next.ScrollTo();
	});

});
