$(document).on('ready', function() {


	// Section Manager
	// -------------------------------------------------------------------------
	function SectionManager() {
		var self = this;
		this.current = {};
		this.sections = $('section');
		this.update = function(scrollPosition) {
			for(var i = 0; i < this.sections.length; i++) {
				var e = $(this.sections[i]);
				var wh = $(window).height();
				var top = e.offset().top;
				var bottom = top + e.outerHeight();
				if (scrollPosition > top - wh/2 && scrollPosition < bottom - wh/2) {
					if (i != this.current.index) {
						updateCurrent(i);
					}
					if (scrollPosition >= top - wh/2 && scrollPosition <= top) {
						var progress = (scrollPosition - (top - wh/2)) / (wh/2);
						updateColor(progress);
					}
					else if (!this.current.transitionComplete) {
						updateColor(1);
					}
				}
			}
			// update title
			var $title = this.current.el.find('.title');
			if (scrollPosition >= (this.current.top - 160)) {
				$('.stuck').removeClass('stuck');
				$title.removeClass('top');
				$title.addClass('stuck');
			} else if (scrollPosition < (this.current.top - 160)) {
				$('.stuck').removeClass('stuck');
				$title.removeClass('stuck');
				$title.addClass('top');
			}
			if (scrollPosition >= (this.current.bottom - $(window).height() + 160)) {
				$('.stuck').removeClass('stuck');
				$title.removeClass('stuck');
				$title.addClass('bottom');
			}
			else if (scrollPosition < (this.current.bottom - $(window).height() + 160) && scrollPosition >= (this.current.top - 160)) {
				$('.stuck').removeClass('stuck');
				$title.removeClass('bottom');
				$title.addClass('stuck');
			}
			console.log('CURRENT SECTION: ' + this.current.id);
		};
		var updateCurrent = function(index) {
			self.current.index = index;
			var el = self.current.el = $(self.sections[index]);
			self.current.top = el.offset().top;
			self.current.bottom = self.current.top + el.outerHeight();
			self.current.id = el.attr('id');
			switch(self.current.id) {
				case 'hero':
					self.current.color = 'rgba(0, 0, 0, 0)';
					break;
				case 'mission':
					self.current.color = 'rgb(216, 242, 130)';
					self.current.previousColor = 'rgba(0, 0, 0, 0)';
					break;
				case 'about':
					self.current.color = 'rgb(152, 240, 200)';
					self.current.previousColor = 'rgb(216, 242, 130)';
					break;
				case 'vision':
					self.current.color = 'rgb(145, 230, 223)';
					self.current.previousColor = 'rgb(152, 240, 200)';
					break;
				case 'timeline':
					self.current.color = 'rgb(168, 197, 255)';
					self.current.previousColor = 'rgb(145, 230, 223)';
					break;
				case 'principles':
					self.current.color = 'rgb(200, 176, 255)';
					self.current.previousColor = 'rgb(168, 197, 255)';
					break;
				case 'join':
					self.current.color = 'rgb(255, 148, 189)';
					self.current.previousColor = 'rgb(200, 176, 255)';
					break;
				case 'news':
					self.current.color = 'rgb(255, 125, 129)';
					self.current.previousColor = 'rgb(255, 148, 189)';
					break;
				case 'team':
					self.current.color = 'rgb(255, 128, 83)';
					self.current.previousColor = 'rgb(255, 125, 129)';
					break;
			}
			self.current.transitionComplete = false;
			$('.current').removeClass('current');
			el.addClass('current');
		};
		var updateColor  = function(progress) {
			if (self.current.id != 'mission' && self.current.id != 'hero') {
				var c = $.Color(self.current.previousColor).transition(self.current.color, progress);
				$('.bg').css('background-color', c);
				self.current.transitionComplete = false;
				if (progress >= 1) {
					self.current.transitionComplete = true;
				}
			}
			else if (self.current.id === 'mission') {
				console.log("Progress: " + progress);
				if (progress >= 1) {
					self.current.transitionComplete = true;
					$('.bg').css('background-color', 'rgb(216, 242, 130)');
					self.current.el.css('background-color', 'transparent');
				}
				else if (progress < 1) {
					$('.bg').css('background-color', 'transparent');
					self.current.el.css('background-color', 'rgb(216, 242, 130)');
				}
			}
			if (self.current.id === 'team') {
				if (self.current.transitionComplete) {
					self.current.el.css('background-color', 'rgb(255, 128, 83)');
					$('.bg').css('background-color', 'transparent');
				}
				else if (progress < 1) {
					$('.bg').css('background-color', 'rgb(255, 128, 83)');
					self.current.el.css('background-color', 'transparent');
				}
			}
		};
	};
	var s = new SectionManager();



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
	// var $currentSection = $('section.current');
	// var $prevSection = null;
	// var currentBgColor = null;

	// -------------------------------------------------------------------------
	// animate colors

	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();
		s.update($scroll);
		// ---------------------------------------------------------------------
		// front page
		if ($('.front-page').length > 0) {
			// var $currentTop = $currentSection.offset().top;
			// var $currentBottom = $currentSection.offset().top + $currentSection.outerHeight();
			// var $currentTitle = $currentSection.find('.title');

			// -----------------------------------------------------------------
			// set currentSection
			// if ($currentSection.next('section').length > 0) {
			// 	var $nextTop = $currentSection.next('section').offset().top;
			// }
			// if ($scroll > ($nextTop - ($(window).height()/2))) {
			// 	$currentSection = $currentSection.next('section');
			// 	$currentTop = $currentSection.offset().top;
			// 	$currentBottom = $currentSection.offset().top + $currentSection.outerHeight();
			// 	$currentTitle = $currentSection.find('.title');
			// 	$('section.current').removeClass('current');
			// 	$currentSection.addClass('current');
			// }
			// if ($scroll < ($currentTop - ($(window).height()/2))) {
			// 	$currentSection = $currentSection.prev('section');
			// 	$currentTop = $currentSection.offset().top;
			// 	$currentBottom = $currentSection.offset().top + $currentSection.outerHeight();
			// 	$currentTitle = $currentSection.find('.title');
			// 	$('section.current').removeClass('current');
			// }

			// fadeBg($scroll);

			// -----------------------------------------------------------------
			// make titles stick
			// if ($scroll >= ($currentTop - 160)) {
			// 	$('section').find('.title').removeClass('stuck');
			// 	$currentTitle.removeClass('top');
			// 	$currentTitle.addClass('stuck');
			// } else if ($scroll < ($currentTop - 160)) {
			// 	$('section').find('.title').removeClass('stuck');
			// 	$currentTitle.removeClass('stuck');
			// 	$currentTitle.addClass('top');
			// }
			// if ($scroll >= ($currentBottom - $(window).height() + 160)) {
			// 	$('section').find('.title').removeClass('stuck');
			// 	$currentTitle.removeClass('stuck');
			// 	$currentTitle.addClass('bottom');
			// }
			// else if ($scroll < ($currentBottom - $(window).height() + 160) && $scroll >= ($currentTop - 160)) {
			// 	$('section').find('.title').removeClass('stuck');
			// 	$currentTitle.removeClass('bottom');
			// 	$currentTitle.addClass('stuck');
			// }
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
		// ---------------------------------------------------------------------
		// show and hide arrow (bottom left)
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
	// var prevColoredSection = null;
	// function fadeBg($scroll) {
	// 	var bgAnimationSpeed = 300;
	// 	if (prevColoredSection != $currentSection) {
	// 		switch($currentSection.attr('id')) {
	// 			case 'mission':
	// 				if (prevColoredSection != null && prevColoredSection.attr('id') === 'about') {
	// 					$('.bg').animate({
	// 						backgroundColor: 'rgb(216, 242, 130)'
	// 					}, bgAnimationSpeed);
	// 				}
	// 				break;
	// 			case 'about':
	// 				$('.bg').animate({
	// 					backgroundColor: 'rgb(152, 240, 200)'
	// 				}, bgAnimationSpeed);
	// 				break;
	// 			case 'vision':
	// 				$('.bg').animate({
	// 					backgroundColor: 'rgb(145, 230, 223)'
	// 				}, bgAnimationSpeed);
	// 				break;
	// 			case 'timeline':
	// 				$('.bg').animate({
	// 					backgroundColor: 'rgb(168, 197, 255)'
	// 				}, bgAnimationSpeed);
	// 				break;
	// 			case 'principles':
	// 				$('.bg').animate({
	// 					backgroundColor: 'rgb(200, 176, 255)'
	// 				}, bgAnimationSpeed);
	// 				break;
	// 			case 'join':
	// 				$('.bg').animate({
	// 					backgroundColor: 'rgb(255, 148, 189)'
	// 				}, bgAnimationSpeed);
	// 				break;
	// 			case 'news':
	// 				$('.bg').animate({
	// 					backgroundColor: 'rgb(255, 125, 129)'
	// 				}, bgAnimationSpeed);
	// 				break;
	// 			case 'team':
	// 				$('.bg').animate({
	// 					backgroundColor: 'rgb(255, 128, 83)'
	// 				}, bgAnimationSpeed);
	// 				break;
	// 		}
	// 	}
	// 	// mission bg transitions
	// 	if ($scroll > $(window).height() && $scroll < ($(window).height()*1.5) ) {
	// 		$('.bg').css('background-color', 'rgb(216, 242, 130)');
	// 		$('.mission-section').css('background-color', 'transparent');
	// 	}
	// 	else if ($scroll < $(window).height()) {
	// 		$('.mission-section').css('background-color', 'rgb(216, 242, 130)');
	// 		$('.bg').css('background-color', 'transparent');
	// 	}
	// 	// footer bg transitions
	// 	var footerTop = $('.footer').offset().top;
	// 	var teamTop = $('.team-section').offset().top;
	// 	if ($scroll > (footerTop - $(window).height()) ) {
	// 		$('.team-section').css('background-color', 'rgb(255, 128, 83)');
	// 		$('.bg').css('background-color', 'transparent');
	// 	}
	// 	else if ($scroll < (footerTop - $(window).height()) && $scroll > teamTop ) {
	// 		$('.team-section').css('background-color', 'transparent');
	// 		$('.bg').css('background-color', 'rgb(255, 128, 83)');
	// 	}
	// 	prevColoredSection = $currentSection;
	// }





	// control w scroll
	// -------------------------------------------------------------------------
	// background color transitions FUNCTION
// 	var prevColoredSection = null;
// 	function fadeBg($scroll) {
// 		var $bg = $('.bg');
// 		var bgAnimationSpeed = 300;
// 		var fromColor = null;
// 		var toColor = null;
// 		var scrollProgress = null;
//
// 		switch($currentSection.attr('id')) {
// 			case 'mission':
// 				if (prevColoredSection != null && prevColoredSection.attr('id') === 'about') {
// 					$('.bg').animate({
// 						backgroundColor: 'rgb(216, 242, 130)'
// 					}, bgAnimationSpeed);
// 				}
// 				break;
//
// 			case 'about':
//
// 				fromColor = prevColoredSection.css('backgroundColor');
// 				toColor = 'rgb(152, 240, 200)';
// 				transitionColor = $.Color(fromColor).transition(toColor, scrollProgress);
// 				$bg.css('background-color', transitionColor);
// 				break;
//
// 			case 'vision':
// 				$('.bg').animate({
// 					backgroundColor: 'rgb(145, 230, 223)'
// 				}, bgAnimationSpeed);
// 				break;
// 			case 'timeline':
// 				$('.bg').animate({
// 					backgroundColor: 'rgb(168, 197, 255)'
// 				}, bgAnimationSpeed);
// 				break;
// 			case 'principles':
// 				$('.bg').animate({
// 					backgroundColor: 'rgb(200, 176, 255)'
// 				}, bgAnimationSpeed);
// 				break;
// 			case 'join':
// 				$('.bg').animate({
// 					backgroundColor: 'rgb(255, 148, 189)'
// 				}, bgAnimationSpeed);
// 				break;
// 			case 'news':
// 				$('.bg').animate({
// 					backgroundColor: 'rgb(255, 125, 129)'
// 				}, bgAnimationSpeed);
// 				break;
// 			case 'team':
// 				$('.bg').animate({
// 					backgroundColor: 'rgb(255, 128, 83)'
// 				}, bgAnimationSpeed);
// 				break;
// 		}
//
// 		// mission bg transitions
// 		if ($scroll > $(window).height() && $scroll < ($(window).height()*1.5) ) {
// 			$('.bg').css('background-color', 'rgb(216, 242, 130)');
// 			$('.mission-section').css('background-color', 'transparent');
// 		}
// 		else if ($scroll < $(window).height()) {
// 			$('.mission-section').css('background-color', 'rgb(216, 242, 130)');
// 			$('.bg').css('background-color', 'transparent');
// 		}
// 		// footer bg transitions
// 		var footerTop = $('.footer').offset().top;
// 		var teamTop = $('.team-section').offset().top;
// 		if ($scroll > (footerTop - $(window).height()) ) {
// 			$('.team-section').css('background-color', 'rgb(255, 128, 83)');
// 			$('.bg').css('background-color', 'transparent');
// 		}
// 		else if ($scroll < (footerTop - $(window).height()) && $scroll > teamTop ) {
// 			$('.team-section').css('background-color', 'transparent');
// 			$('.bg').css('background-color', 'rgb(255, 128, 83)');
// 		}
// 		prevColoredSection = $currentSection;
// 	}
});
