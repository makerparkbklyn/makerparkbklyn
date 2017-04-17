$(function() {

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
	// $('.logo').addClass('out');

	// On Scroll Events
	// -------------------------------------------------------------------------
	$(window).scroll(function() {

		var $scroll = $(window).scrollTop();

		// Show/Hide Logo in Hero
		// ---------------------------------------------------------------------
		// if ( $scroll > ($(window).height()) * .6 ) {
		// 	$('.logo').removeClass('out');
		// }
		// else if ( $scroll < ($(window).height() * .6 ) ) {
		// 	$('.logo').addClass('out');
		// }

		// Show/Hide Next Section Arrow
		// ---------------------------------------------------------------------
		// on footer enter make down arrow become up arrow

		// Mission Section
		// ---------------------------------------------------------------------
		// if (s.current.id === 'mission') {
		// 	var t = $scroll - $('#mission').offset().top;
		// 	$('.mission-section .headline--xl').css('transform', 'translate3d(0, ' + t/1.7 + 'px, 0)');
		// 	// $('.mission-section.current .p1').css('transform', 'translate3d(0, ' + t/1.7 + 'px, 0)');
		// 	$('.mission-section.current .p2').css('transform', 'translate3d(0, ' + t/12 + 'px, 0)');
		// }

	});

	// Scroll Effects
	// -------------------------------------------------------------------------
	var mpCtrl = new ScrollMagic.Controller();
	var h = $(window).height();
	console.log('h: ' + h);
	var debug = false;
	var keyframes = [
		{
			section			:	'#hero',
			hook			:	'onLeave',
			scenes: [
				{
					name	:	'heroBGOut',
					duration:	h,
					offset	:	0,
					tween	:	TweenMax.to('#hero .hero-bg', 1, {y: -500, ease: Linear.easeNone}) //prev: y:-735
				},
				{
					name	:	'logoTransform',
					duration:	h,
					offset	:	0,
					tween	:	TweenMax.to('#hero .hero-logo', 1, {y: 540, x: 816, scale: .3, rotation: 360, ease:Power2.easeInOut})
				}
			]
		},
		{
			section			:	'#mission',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	h/2,
					tween	:	TweenMax.from('#mission .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	4500,
					tween	: 	TweenMax.to('#mission .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p1In',
					duration:	1800,
					offset	:	h/2 + h/4,
					tween	: 	TweenMax.from('#mission .p1', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p1Out',
					duration:	1800,
					offset	:	4500 + h/4,
					tween	: 	TweenMax.to('#mission .p1', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p2In',
					duration:	1800,
					offset	:	h/4 + h/2 + h/4,
					tween	: 	TweenMax.from('#mission .p2', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p2Out',
					duration:	1800,
					offset	:	4500 + h/3,
					tween	: 	TweenMax.to('#mission .p2', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1Thru',
					duration:	8000,
					offset	:	h/2,
					tween	: 	TweenMax.fromTo('#mission .bg-pattern-1', 1, {y: 1.5*h}, {y: -1.75*h, ease: Linear.easeNone})
				},
				{
					name	:	'pattern2Thru',
					duration:	10000,
					offset	:	2*h,
					tween	: 	TweenMax.fromTo('#mission .bg-pattern-2', 1, {y: 1.5*h}, {y: -2*h, ease: Linear.easeNone})
				},
				{
					name	:	'renderingIn',
					duration:	1800,
					offset	:	4500 + h*1.25,
					tween	: 	TweenMax.from('#mission .rendering', 1, {y: h, x: -800, ease: Power2.easeOut})
				},
				{
					name	:	'renderingOut',
					duration:	1800,
					offset	:	8000 + h*1.25 ,
					tween	: 	TweenMax.to('#mission .rendering', 1, {y: -h, x: 800, ease: Power2.easeIn})
				}
				// {
				// 	name	:	'pattern1In',
				// 	duration:	2400,
				// 	offset	:	h/2,
				// 	tween	: 	TweenMax.from('#mission .bg-pattern-1', 1, {y: 2*h, ease: Power2.easeOut})
				// },
				// {
				// 	name	:	'pattern2In',
				// 	duration:	2400,
				// 	offset	:	h/2,
				// 	tween	: 	TweenMax.from('#mission .bg-pattern-2', 1, {y: 2*h, ease: Power2.easeOut})
				// }
			]
		},
		{
			section			:	'#site',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	h/2,
					tween	:	TweenMax.from('#site .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	10*h,
					tween	: 	TweenMax.to('#site .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p1In',
					duration:	1800,
					offset	:	h/2 + h/4,
					tween	: 	TweenMax.from('#site .p1', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p1Out',
					duration:	1800,
					offset	:	10*h + h/4,
					tween	: 	TweenMax.to('#site .p1', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p2In',
					duration:	1800,
					offset	:	h/4 + h/2 + h/4,
					tween	: 	TweenMax.from('#site .p2', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p2Out',
					duration:	1800,
					offset	:	10*h + h/3,
					tween	: 	TweenMax.to('#site .p2', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p3In',
					duration:	1800,
					offset	:	h/4 + h,
					tween	: 	TweenMax.from('#site .p3', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p3Out',
					duration:	1800,
					offset	:	10*h + h/2,
					tween	: 	TweenMax.to('#site .p3', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1In',
					duration:	2400,
					offset	:	h,
					tween	: 	TweenMax.from('#site .bg-pattern-1', 1, {y: h*1.5, x: -500, ease: Power2.easeOut})
				},
				{
					name	:	'pattern1Out',
					duration:	2400,
					offset	:	10*h + h/2,
					tween	: 	TweenMax.to('#site .bg-pattern-1', 1, {y: -h*2, x: 500, ease: Power2.easeIn})
				},
				{
					name	:	'image00Thru',
					duration:	2700,
					offset	:	3.5*h,
					tween	: 	TweenMax.fromTo('#site .image-00', 1, {y: 2*h}, {y: -0.25*h, ease: Linear.easeNone})
				},
				{
					name	:	'image01Thru',
					duration:	4000,
					offset	:	4.5*h,
					tween	: 	TweenMax.fromTo('#site .image-01', 1, {y: 2.5*h}, {y: -0.25*h, ease: Linear.easeNone})
				},
				{
					name	:	'image02Thru',
					duration:	4200,
					offset	:	5.5*h,
					tween	: 	TweenMax.fromTo('#site .image-02', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'image03Thru',
					duration:	4200,
					offset	:	6.25*h,
					tween	: 	TweenMax.fromTo('#site .image-03', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'image04Thru',
					duration:	6000,
					offset	:	6.5*h,
					tween	: 	TweenMax.fromTo('#site .image-04', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'image05Thru',
					duration:	3000,
					offset	:	6.75*h,
					tween	: 	TweenMax.fromTo('#site .image-05', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'mapIn',
					duration:	1800,
					offset	:	11*h,
					tween	: 	TweenMax.from('#site .map', 1, {y: h*1.5, x: -800, ease: Power2.easeOut})
				},
				{
					name	:	'mapOut',
					duration:	1800,
					offset	:	13.5*h,
					tween	: 	TweenMax.to('#site .map', 1, {y: -h*2, x: 800, ease: Power2.easeIn})
				},
			]
		},
		{
			section			:	'#vision',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	h/2,
					tween	:	TweenMax.from('#vision .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	3.5*h,
					tween	: 	TweenMax.to('#vision .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p1In',
					duration:	1800,
					offset	:	0.75*h,
					tween	: 	TweenMax.from('#vision .p1', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p1Out',
					duration:	1800,
					offset	:	3.75*h,
					tween	: 	TweenMax.to('#vision .p1', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p2In',
					duration:	1800,
					offset	:	h,
					tween	: 	TweenMax.from('#vision .p2', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p2Out',
					duration:	1800,
					offset	:	3.85*h,
					tween	: 	TweenMax.to('#vision .p2', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1In',
					duration:	2400,
					offset	:	h,
					tween	: 	TweenMax.from('#vision .bg-pattern-1', 1, {y: h*1.5, x: -500, ease: Power2.easeOut})
				},
				{
					name	:	'pattern1Out',
					duration:	1800,
					offset	:	4.25*h,
					tween	: 	TweenMax.to('#vision .bg-pattern-1', 1, {y: -h*2, x: 500, ease: Power2.easeIn})
				},
				{
					name	:	'pattern2In',
					duration:	2400,
					offset	:	5*h,
					tween	: 	TweenMax.from('#vision .bg-pattern-2', 1, {y: h*1.5, x: -500, ease: Power2.easeOut})
				},
				{
					name	:	'stackIn',
					duration:	1800,
					offset	:	5.5*h,
					tween	: 	TweenMax.from('#vision .image-stack', 1, {y: h*1.5, ease: Power2.easeOut})
				},
				{
					name	:	'stackOut',
					duration:	1800,
					offset	:	13.5*h,
					tween	: 	TweenMax.to('#vision .image-stack', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img1Out',
					duration:	1600,
					offset	:	6.5*h,
					tween	: 	TweenMax.to('#vision .image-stack__item:nth-child(1)', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img2Out',
					duration:	1600,
					offset	:	6.5*h+(800),
					tween	: 	TweenMax.to('#vision .image-stack__item:nth-child(2)', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img3Out',
					duration:	1600,
					offset	:	6.5*h+(800*2),
					tween	: 	TweenMax.to('#vision .image-stack__item:nth-child(3)', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img4Out',
					duration:	1600,
					offset	:	6.5*h+(800*3),
					tween	: 	TweenMax.to('#vision .image-stack__item:nth-child(4)', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img5Out',
					duration:	1600,
					offset	:	6.5*h+(800*4),
					tween	: 	TweenMax.to('#vision .image-stack__item:nth-child(5)', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img6Out',
					duration:	1600,
					offset	:	6.5*h+(800*5),
					tween	: 	TweenMax.to('#vision .image-stack__item:nth-child(6)', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img7Out',
					duration:	1600,
					offset	:	6.5*h+(800*6),
					tween	: 	TweenMax.to('#vision .image-stack__item:nth-child(7)', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'pattern2OutIsh',
					duration:	1800,
					offset	:	10.5*h,
					tween	: 	TweenMax.to('#vision .bg-pattern-2', 1, {y: -h*0.975, x: 400, ease: Power2.easeInOut})
				},
				{
					name	:	'videoIn',
					duration:	1800,
					offset	:	10.5*h,
					tween	: 	TweenMax.from('#vision .video', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'pattern2Out',
					duration:	1800,
					offset	:	12*h,
					tween	: 	TweenMax.to('#vision .bg-pattern-2', 1, {y: -h*2, x: 500, ease: Power2.easeIn})
				}
			]
		},
	];
	function setupScrollScenes() {
		for (var i = 0; i < keyframes.length; i++) {
			var p = keyframes[i];
			var trigger = p.section;
			var hook = p.hook;
			for (var j = 0; j < p.scenes.length; j++) {
				var scene = p.scenes[j];
				var s = new ScrollMagic.Scene({
					triggerElement: trigger,
					triggerHook: hook,
					duration: scene.duration,
					offset: scene.offset
				});
				s.setTween(scene.tween);
				if (debug) { s.addIndicators({name: scene.name}) }
				s.addTo(mpCtrl);
			}
		}
	}
	setupScrollScenes();


	// Init Slick Photo Carousel
	// -------------------------------------------------------------------------
	// var $status = $('.carousel__count p');
	// var $photoCarousel = $('.carousel.site-photos');
	//
	// $photoCarousel.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	//     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	//     var i = (currentSlide ? currentSlide : 0) + 1;
	//     $status.text(i + '/' + slick.slideCount);
	// });
	// $photoCarousel.slick({
	// 	slide: '.carousel__image',
	// 	infinite: true,
	// 	speed: 500,
	// 	arrows: true,
	// 	pauseOnHover: false,
	// 	adaptiveHeight: true
	// });

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
