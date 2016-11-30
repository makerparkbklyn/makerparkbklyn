$(document).on('ready', function() {

	// Section Manager
	// -------------------------------------------------------------------------
	function SectionManager() {
		var self = this;
		this.current = {};
		var sections = this.sections = $('section');
		var ctrl = this.scrollCtrl = new ScrollMagic.Controller();
		var titles = $('.title');

		for (var i = 0; i < sections.length; i++) {

			// Update current section
			// -----------------------------------------------------------------
			new ScrollMagic.Scene({
				triggerElement: sections[i],
				duration: $(sections[i]).outerHeight()
			})
			.addTo(ctrl)
			// .addIndicators()
			.on("enter leave", function (e) {
				if (e.type === 'enter') {
					var $el = $(this.triggerElement());
					self.current.id = $el.attr('id');
					$('.current').removeClass('current');
					$el.addClass('current');
				}
			})

			// Change background color
			// -----------------------------------------------------------------
			if ( $(sections[i]).attr('id') != 'hero' ) {
				new ScrollMagic.Scene({
					triggerElement: sections[i],
					duration: '50%'
				})
				.addTo(ctrl)
				// .addIndicators()
				.on('progress', function(e) {
					if (e.progress > 0) {
						var el = $(this.triggerElement());
						var c = $.Color(el.prev().attr('data-bg-color')).transition(el.attr('data-bg-color'), e.progress.toFixed(3));
						$('section').css('background-color', c);
					}
				});
			}
		}

		// Sticky titles
		// ---------------------------------------------------------------------
		for (var i = 0; i < titles.length; i++) {
			var t = $(titles[i]);
			var toffset = t.width() / 2;
			var tduration = t.parent().outerHeight() - (t.width() + 192);
			new ScrollMagic.Scene({
				triggerElement: titles[i],
				duration: tduration,
				offset: toffset
			})
			.setPin(titles[i])
			// .addIndicators()
			.addTo(ctrl);
		}
	}

	// Instantiate New Section Manager
	// -------------------------------------------------------------------------
	var s = window.s = new SectionManager();
	$(window).scroll(function(){
		console.log('CURRENT: ' + s.current.id);
	})

	// Next Section Arrow
	// -------------------------------------------------------------------------
	// change this to check if up or down and switch (no arrow in footer)
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

	// Hide Logo in Hero Section
	// -------------------------------------------------------------------------
	$('.logo').addClass('out');

	// On Scroll Events
	// -------------------------------------------------------------------------
	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();

		// Show/Hide Logo in Hero
		// ---------------------------------------------------------------------
		if ( $scroll > ($(window).height()) * .6 ) {
			$('.logo').removeClass('out');
		}
		else if ( $scroll < ($(window).height() * .6 ) ) {
			$('.logo').addClass('out');
		}

		// Show/Hide Next Section Arrow
		// ---------------------------------------------------------------------
		// on footer enter make down arrow become up arrow

		// Mission Section
		// ---------------------------------------------------------------------
		if (s.current.id === 'mission') {
			var t = $scroll - $('#mission').offset().top;
			$('.mission-section .headline--xl').css('transform', 'translate3d(0, ' + t/1.7 + 'px, 0)');
			// $('.mission-section.current .p1').css('transform', 'translate3d(0, ' + t/1.7 + 'px, 0)');
			$('.mission-section.current .p2').css('transform', 'translate3d(0, ' + t/12 + 'px, 0)');
		}

	});

	// Init Slick Photo Carousel
	// -------------------------------------------------------------------------
	var $status = $('.carousel__count p');
	var $photoCarousel = $('.carousel.site-photos');

	$photoCarousel.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $status.text(i + '/' + slick.slideCount);
	});
	$photoCarousel.slick({
		slide: '.carousel__image',
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



});
