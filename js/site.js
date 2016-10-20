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
		var nextIndex = s.current.index + 1;
		var $nextSection = $(s.sections[nextIndex]);
		if (!$nextSection.length > 0) {
			$nextSection = $('footer');
		}
		$nextSection.ScrollTo();
	});

	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();
		s.update($scroll);
		// ---------------------------------------------------------------------
		// front page
		if ($('.front-page').length > 0) {
			// -----------------------------------------------------------------
			// show and hide logo (right rail), scrolling from hero
			if ( $scroll > ($(window).height()) * .6 ) {
				$('.logo').removeClass('out');
			}
			else if ( $scroll < ($(window).height() * .6 ) ) {
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

});
