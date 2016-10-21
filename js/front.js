$(document).on('ready', function() {

	// Section Manager
	// -------------------------------------------------------------------------
	function SectionManager() {
		var self = this;
		this.current = {};
		this.sections = $('section');

		// Update
		// -------------------------------------------------------------------------
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
			if (scrollPosition >= (this.current.top - 160)) {
				var $title = this.current.el.find('.title');
				$('.stuck').removeClass('stuck');
				$title.removeClass('top');
				$title.addClass('stuck');
			} else if (scrollPosition < (this.current.top - 160)) {
				var $title = this.current.el.find('.title');
				$('.stuck').removeClass('stuck');
				$title.removeClass('stuck');
				$title.addClass('top');
			}
			if (scrollPosition >= (this.current.bottom - $(window).height() + 160)) {
				var $title = this.current.el.find('.title');
				$('.stuck').removeClass('stuck');
				$title.removeClass('stuck');
				$title.addClass('bottom');
			}
			else if (scrollPosition < (this.current.bottom - $(window).height() + 160) && scrollPosition >= (this.current.top - 160)) {
				var $title = this.current.el.find('.title');
				$('.stuck').removeClass('stuck');
				$title.removeClass('bottom');
				$title.addClass('stuck');
			}
			console.log('CURRENT SECTION: ' + this.current.id);
		}

		// Update Current Section
		// -------------------------------------------------------------------------
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
		}

		// Update BG Color
		// -------------------------------------------------------------------------
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
			else if (self.current.id === 'hero') {
				$('.bg').css('background-color', 'transparent');
				$('.mission-section').css('background-color', 'rgb(216, 242, 130)');
			}
			if (self.current.id === 'team') {
				if (self.current.transitionComplete) {
					console.log("transition complete");
					self.current.el.css('background-color', 'rgb(255, 128, 83)');
					$('.bg').css('background-color', 'transparent');
				}
				else if (progress < 1) {
					console.log("progress < 1");
					// $('.bg').css('background-color', 'rgb(255, 128, 83)');
					self.current.el.css('background-color', 'transparent');
				}
			}
		}

		// Init
		// -------------------------------------------------------------------------
		updateCurrent(0);
	};

	// Instantiate New Section Manager
	// -------------------------------------------------------------------------
	var s = new SectionManager();

	// Init Slick Photo Carousel
	// -------------------------------------------------------------------------
	$('.carousel.site-photos').slick({
		infinite: true,
		speed: 500,
		arrows: true,
		pauseOnHover: false,
		adaptiveHeight: true
	});

	// Init Slick Timeline Carousel
	// -------------------------------------------------------------------------
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

	// Hide Logo in Hero Section
	// -------------------------------------------------------------------------
	$('.logo').addClass('out');

	// Next Section Arrow
	// -------------------------------------------------------------------------
	$('body').on('click', '.arrow-down', function(e) {
		e.preventDefault();
		var nextIndex = s.current.index + 1;
		if (nextIndex >= s.sections.length) {
			$nextSection = $('footer');
		}
		else {
			var $nextSection = $(s.sections[nextIndex]);
		}
		$nextSection.ScrollTo({ duration: 1000 });
	});

	// On Scroll Events
	// -------------------------------------------------------------------------
	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();
		s.update($scroll);

		// Show/Hide Logo in Hero
		// -----------------------------------------------------------------
		if ( $scroll > ($(window).height()) * .6 ) {
			$('.logo').removeClass('out');
		}
		else if ( $scroll < ($(window).height() * .6 ) ) {
			$('.logo').addClass('out');
		}

		// Show/Hide Next Section Arrow
		// ---------------------------------------------------------------------
		var $footerTop = $('.footer').offset().top;
		if ($scroll > ($footerTop - $(window).height())) {
			$('.arrow-down').addClass('hidden');
		}
		else if ($scroll < ($footerTop - $(window).height())) {
			$('.arrow-down').removeClass('hidden');
		}
	});

});
