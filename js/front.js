$(function() {

	// Section Manager
	// -------------------------------------------------------------------------
	function SectionManager() {
		var self = this;
		this.current = '';
		var sections = this.sections = $('section');
		sections.push($('#footer')[0]);
		var ctrl = this.scrollCtrl = new ScrollMagic.Controller();
		var titles = $('section .title');

		for (var i = 0; i < sections.length; i++) {

			// Update current section
			// -----------------------------------------------------------------
			new ScrollMagic.Scene({
				triggerElement: sections[i],
				duration: $(sections[i]).outerHeight()
			})
			.addTo(ctrl)
			// .addIndicators({name: $(sections[i]).attr('id')})
			.on("enter leave", function (e) {
				if (e.type === 'enter') {
					var $el = $(this.triggerElement());
					self.current = $el.attr('id');
					$('.current').removeClass('current');
					$el.addClass('current');
					console.log('CURRENT: ' + self.current);
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
				// .addIndicators({name: $(sections[i]).attr('id')})
				.on('progress', function(e) {
					if (e.progress > 0) {
						var el = $(this.triggerElement());
						var c = $.Color(el.prev().attr('data-bg-color')).transition(el.attr('data-bg-color'), e.progress.toFixed(3));
						$('section').css('background-color', c);
						// color nav overlay
						$('nav').css('background-color', c);
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


	// Next Section Arrow
	// -------------------------------------------------------------------------
	// use ScrollMagic for this? need to scroll to locking point
	$('body').on('click', '.arrow-down', function(e) {
		e.preventDefault();
		var $current = $('#' + s.current);
		var $next = null;
		if (s.current === 'footer') {
			$next = $('#hero');
		}
		else {
			$next = $current.next();
		}
		$next.ScrollTo({ duration: 3000 });
	});

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
	var $nav = $('nav');
	var navTL = new TimelineMax();
	navTL.to($nav, 0.1, {
		opacity: 1,
		ease: Linear.easeNone
	});

	$('.nav__item').each(function(index, element){
		var t, x, y, r;

		t = 0.1 * getRandomInt(1,9) + 0.75;

		r = getRandomInt(180, 360);

		if (index <= 3) { y = '-100%' }
		else { y = '-200%' }

		if (index % 4 === 0) { x = '400%' }
		else if (index % 4 === 1) { x = '300%' }
		else if (index % 4 === 2) { x = '200%' }
		else { x = '100%' }

		navTL.from(element, t, {
			opacity: 0,
			x: x,
			y: y,
			rotation: r,
			ease: Elastic.easeOut.config(1, 0.85)
		}, 0);
	});

	$('body').on("click", '.menu-button', function (e) {
		e.preventDefault();
		$nav.css('z-index', '99999');
		navTL.timeScale = 1;
		navTL.restart();
	});

	$('body').on("click", '.close-menu-button', function (e) {
		e.preventDefault();
		navTL.timeScale = 0.5;
		navTL.reverse();
		setTimeout(function(){
			$nav.css('z-index', '-10');
		}, 2400);
	});

	// Hide Logo in Hero Section
	// -------------------------------------------------------------------------
	// $('.logo').addClass('out');

	// On Scroll Events
	// -------------------------------------------------------------------------
	// $(window).scroll(function() {
	//
	// 	var $scroll = $(window).scrollTop();

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

	// });

	// Scroll Effects
	// -------------------------------------------------------------------------
	var mpCtrl = new ScrollMagic.Controller();
	var h = $(window).height();
	console.log('h: ' + h);
	var debug = false;
	var combinedKeyframes = [
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
					tween	:	TweenMax.to('#hero .hero-logo', 1, {y: 534, x: 816, scale: .3, rotation: 360, ease:Power2.easeInOut})
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
					offset	:	.25*h,
					tween	:	TweenMax.from('#site .section__title', 1, {y: h*1.2, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	9.75*h,
					tween	: 	TweenMax.to('#site .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p1In',
					duration:	1800,
					offset	:	.65*h,
					tween	: 	TweenMax.from('#site .p1', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p1Out',
					duration:	1800,
					offset	:	10*h,
					tween	: 	TweenMax.to('#site .p1', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p2In',
					duration:	1800,
					offset	:	.85*h,
					tween	: 	TweenMax.from('#site .p2', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p2Out',
					duration:	1800,
					offset	:	10.25*h,
					tween	: 	TweenMax.to('#site .p2', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p3In',
					duration:	1800,
					offset	:	h,
					tween	: 	TweenMax.from('#site .p3', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p3Out',
					duration:	1800,
					offset	:	10.25*h,
					tween	: 	TweenMax.to('#site .p3', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1In',
					duration:	2400,
					offset	:	.75*h,
					tween	: 	TweenMax.from('#site .bg-pattern-1', 1, {y: h*1.5, ease: Power2.easeOut})
				},
				{
					name	:	'pattern1Out',
					duration:	2400,
					offset	:	10.25*h,
					tween	: 	TweenMax.to('#site .bg-pattern-1', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'pattern2In',
					duration:	2400,
					offset	:	h,
					tween	: 	TweenMax.from('#site .bg-pattern-2', 1, {y: h*1.5, ease: Power2.easeOut})
				},
				// {
				// 	name	:	'pattern2Move',
				// 	duration:	2400,
				// 	offset	:	10.25*h,
				// 	tween	: 	TweenMax.to('#site .bg-pattern-2', 1, {y: -h, ease: Power2.easeIn})
				// },
				{
					name	:	'pattern2Out',
					duration:	2400,
					offset	:	10.5*h,
					tween	: 	TweenMax.to('#site .bg-pattern-2', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'image00Thru',
					duration:	2700,
					offset	:	3.25*h,
					tween	: 	TweenMax.fromTo('#site .image-00', 1, {y: 2*h}, {y: -0.25*h, ease: Linear.easeNone})
				},
				{
					name	:	'image01Thru',
					duration:	4000,
					offset	:	4*h,
					tween	: 	TweenMax.fromTo('#site .image-01', 1, {y: 2.5*h}, {y: -0.25*h, ease: Linear.easeNone})
				},
				{
					name	:	'image02Thru',
					duration:	4200,
					offset	:	5.25*h,
					tween	: 	TweenMax.fromTo('#site .image-02', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'image03Thru',
					duration:	4200,
					offset	:	6*h,
					tween	: 	TweenMax.fromTo('#site .image-03', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'image04Thru',
					duration:	6000,
					offset	:	6.25*h,
					tween	: 	TweenMax.fromTo('#site .image-04', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'image05Thru',
					duration:	3000,
					offset	:	6.5*h,
					tween	: 	TweenMax.fromTo('#site .image-05', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
				},
				{
					name	:	'mapIn',
					duration:	1800,
					offset	:	10.75*h,
					tween	: 	TweenMax.from('#site .map', 1, {y: h*1.5, x: -800, ease: Power2.easeOut})
				},
				{
					name	:	'mapOut',
					duration:	1800,
					offset	:	13.25*h,
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
					name	:	'pattern1Move',
					duration:	2400,
					offset	:	4.25*h,
					tween	: 	TweenMax.to('#vision .bg-pattern-1', 1, {y: -1.2*h, x: 725, ease: Power2.easeInOut})
				},
				{
					name	:	'pattern1Move2',
					duration:	2400,
					offset	:	10.5*h,
					tween	: 	TweenMax.to('#vision .bg-pattern-1', 1, {y: -h*2.05, x: 1400, ease: Power2.easeInOut})
				},
				{
					name	:	'pattern1Out',
					duration:	2400,
					offset	:	12*h,
					tween	: 	TweenMax.to('#vision .bg-pattern-1', 1, {y: -h*2.25, x: 1500, ease: Power2.easeIn})
				},
				// {
				// 	name	:	'pattern2In',
				// 	duration:	1800,
				// 	offset	:	4.5*h,
				// 	tween	: 	TweenMax.from('#vision .bg-pattern-2', 1, {y: h*1.5, x: -500, ease: Power2.easeOut})
				// },
				{
					name	:	'stackIn',
					duration:	1800,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack', 1, {y: h*1.5, ease: Power2.easeOut})
				},
				{
					name	:	'stackOut',
					duration:	1800,
					offset	:	12.5*h,
					tween	: 	TweenMax.to('#vision .image-stack', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'img1In',
					duration:	1600,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack__item:nth-child(1)', 1, {y: 800, ease: Power2.easeOut})
				},
				{
					name	:	'img2In',
					duration:	1650,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack__item:nth-child(2)', 1, {y: 500, ease: Power2.easeOut})
				},
				{
					name	:	'img3In',
					duration:	1700,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack__item:nth-child(3)', 1, {y: 600, ease: Power2.easeOut})
				},
				{
					name	:	'img4In',
					duration:	1750,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack__item:nth-child(4)', 1, {y: 700, ease: Power2.easeOut})
				},
				{
					name	:	'img5In',
					duration:	1800,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack__item:nth-child(5)', 1, {y: 800, ease: Power2.easeOut})
				},
				{
					name	:	'img6In',
					duration:	1850,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack__item:nth-child(6)', 1, {y: 900, ease: Power2.easeOut})
				},
				{
					name	:	'img7In',
					duration:	1900,
					offset	:	4.75*h,
					tween	: 	TweenMax.from('#vision .image-stack__item:nth-child(7)', 1, {y: 1400, ease: Power2.easeOut})
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
				// {
				// 	name	:	'pattern2Move',
				// 	duration:	2200,
				// 	offset	:	10.5*h,
				// 	tween	: 	TweenMax.to('#vision .bg-pattern-2', 1, {y: -h*1.55, x: 384, ease: Power2.easeInOut})
				// },
				{
					name	:	'videoIn',
					duration:	1800,
					offset	:	11*h,
					tween	: 	TweenMax.from('#vision .video', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p3In',
					duration:	1800,
					offset	:	11*h,
					tween	: 	TweenMax.from('#vision .p3', 1, {y: h/2, ease: Power2.easeOut})
				},
				// {
				// 	name	:	'pattern2Out',
				// 	duration:	1800,
				// 	offset	:	13*h,
				// 	tween	: 	TweenMax.to('#vision .bg-pattern-2', 1, {y: -h*2, x: 500, ease: Power2.easeIn})
				// },
				{
					name	:	'videoOut',
					duration:	1800,
					offset	:	13*h,
					tween	: 	TweenMax.to('#vision .video', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'p3Out',
					duration:	1400,
					offset	:	13*h,
					tween	: 	TweenMax.to('#vision .p3', 1, {y: -h*2, ease: Power2.easeIn})
				}
			]
		},
		{
			section			:	'#timeline',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	.25*h,
					tween	:	TweenMax.from('#timeline .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	3*h,
					tween	: 	TweenMax.to('#timeline .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'carouselIn',
					duration:	1800,
					offset	:	.4*h,
					tween	: 	TweenMax.from('#timeline .timeline-carousel', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'carouselOut',
					duration:	1800,
					offset	:	3.1*h,
					tween	: 	TweenMax.to('#timeline .timeline-carousel', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'carouselDotsIn',
					duration:	2400,
					offset	:	.75*h,
					tween	: 	TweenMax.from('#timeline .slick-dots', 1, {y: 1200, ease: Power2.easeOut})
				},
				{
					name	:	'arrowPrevIn',
					duration:	1800,
					offset	:	.75*h,
					tween	: 	TweenMax.from('#timeline .timeline-arrow--prev', 1, {y: 800, ease: Power2.easeOut})
				},
				{
					name	:	'arrowNextIn',
					duration:	1800,
					offset	:	.75*h,
					tween	: 	TweenMax.from('#timeline .timeline-arrow--next', 1, {y: 840, ease: Power2.easeOut})
				},
				{
					name	:	'arrowPrevOut',
					duration:	1400,
					offset	:	3.25*h,
					tween	: 	TweenMax.to('#timeline .timeline-arrow--prev', 1, {y: -0.75*h, ease: Power2.easeIn})
				},
				{
					name	:	'arrowNextOut',
					duration:	1400,
					offset	:	3.25*h,
					tween	: 	TweenMax.to('#timeline .timeline-arrow--next', 1, {y: -0.85*h, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1Thru',
					duration:	6.5*h,
					offset	:	-.25*h,
					tween	: 	TweenMax.fromTo('#timeline .bg-pattern-1', 1, {y: h}, {y: -3.2*h, ease: Power2.easeInOut})
				},
			]
		},
		{
			section			:	'#principles',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	h/2,
					tween	:	TweenMax.from('#principles .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1680,
					offset	:	2.5*h,
					tween	: 	TweenMax.to('#principles .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'listIn',
					duration:	1800,
					offset	:	0.75*h,
					tween	:	TweenMax.from('#principles .principles__list', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'listOut',
					duration:	2000,
					offset	:	2.5*h,
					tween	:	TweenMax.to('#principles .principles__list', 1, {y: -2.25*h, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1In',
					duration:	2400,
					offset	:	0.6*h,
					tween	: 	TweenMax.from('#principles .bg-pattern-1', 1, {y: h*2, x: 200, ease: Power2.easeOut})
				},
				{
					name	:	'pattern1Out',
					duration:	2400,
					offset	:	2.5*h,
					tween	: 	TweenMax.to('#principles .bg-pattern-1', 1, {y: -h*2, x: 400, ease: Power2.easeIn})
				},
				{
					name	:	'pattern2In',
					duration:	2000,
					offset	:	0.5*h,
					tween	: 	TweenMax.from('#principles .bg-pattern-2', 1, {y: h*2, x: -800, ease: Power2.easeOut})
				},
				{
					name	:	'pattern2Out',
					duration:	3000,
					offset	:	2.5*h,
					tween	: 	TweenMax.to('#principles .bg-pattern-2', 1, {y: -h*2, ease: Power2.easeIn})
				},
			]
		},
		{
			section			:	'#join',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	0,
					tween	:	TweenMax.from('#join .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	2.2*h,
					tween	: 	TweenMax.to('#join .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'p1In',
					duration:	1800,
					offset	:	0.25*h,
					tween	:	TweenMax.from('#join .p1', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'p1Out',
					duration:	1400,
					offset	:	2.3*h,
					tween	: 	TweenMax.to('#join .p1', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'formIn',
					duration:	1800,
					offset	:	0.5*h,
					tween	:	TweenMax.from('#join .join-form', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'formOut',
					duration:	1200,
					offset	:	2.5*h,
					tween	: 	TweenMax.to('#join .join-form', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1In',
					duration:	1800,
					offset	:	0.25*h,
					tween	: 	TweenMax.from('#join .bg-pattern-1', 1, {y: h*2, ease: Power2.easeOut})
				},
				{
					name	:	'pattern1Out',
					duration:	2000,
					offset	:	2.5*h,
					tween	: 	TweenMax.to('#join .bg-pattern-1', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'pattern2In',
					duration:	1800,
					offset	:	0.5*h,
					tween	: 	TweenMax.from('#join .bg-pattern-2', 1, {y: h*2, ease: Power2.easeOut})
				},
				{
					name	:	'pattern2Out',
					duration:	2200,
					offset	:	2.25*h,
					tween	: 	TweenMax.to('#join .bg-pattern-2', 1, {y: -h*2, ease: Power2.easeIn})
				},
				{
					name	:	'pattern3In',
					duration:	1600,
					offset	:	0.5*h,
					tween	: 	TweenMax.from('#join .bg-pattern-3', 1, {y: h*2, ease: Power2.easeOut})
				},
				{
					name	:	'pattern3Out',
					duration:	2000,
					offset	:	2.5*h,
					tween	: 	TweenMax.to('#join .bg-pattern-3', 1, {y: -h*2, ease: Power2.easeIn})
				},
			]
		},
		{
			section			:	'#news',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	0,
					tween	:	TweenMax.from('#news .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	1.75*h,
					tween	: 	TweenMax.to('#news .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'newsListIn',
					duration:	1800,
					offset	:	0.25*h,
					tween	:	TweenMax.from('#news .news-list', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'newsListOut',
					duration:	1800,
					offset	:	1.5*h,
					tween	: 	TweenMax.to('#news .news-list', 1, {y: -1.5*h, ease: Power2.easeIn})
				},
			]
		},
		{
			section			:	'#team',
			hook			:	'onEnter',
			scenes: [
				{
					name	:	'titleIn',
					duration:	1800,
					offset	:	0,
					tween	:	TweenMax.from('#team .section__title', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'titleOut',
					duration:	1800,
					offset	:	1.75*h,
					tween	: 	TweenMax.to('#team .section__title', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'teamPhotoIn',
					duration:	1800,
					offset	:	.25*h,
					tween	: 	TweenMax.from('#team .team-photo', 1, {y: h, x: -800, ease: Power2.easeOut})
				},
				{
					name	:	'teamPhotoOut',
					duration:	1800,
					offset	:	1.75*h,
					tween	: 	TweenMax.to('#team .team-photo', 1, {y: -h, x: 800, ease: Power2.easeIn})
				},
				{
					name	:	'pattern1In',
					duration:	1800,
					offset	:	.25*h,
					tween	: 	TweenMax.from('#team .bg-pattern-1', 1, {y: h*1.5, ease: Power2.easeOut})
				},
				{
					name	:	'pattern1Out',
					duration:	1800,
					offset	:	2*h,
					tween	: 	TweenMax.to('#team .bg-pattern-1', 1, {y: -h*2, x: 600, ease: Power2.easeIn})
				},
				{
					name	:	'expertLogosIn',
					duration:	1800,
					offset	:	2.5*h,
					tween	:	TweenMax.from('#team .expert-team', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'expertLogo6In',
					duration:	1800,
					offset	:	2.2*h,
					tween	:	TweenMax.from('#team .expert-team-block:nth-child(6)', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'expertLogo2In',
					duration:	1800,
					offset	:	2.3*h,
					tween	:	TweenMax.from('#team .expert-team-block:nth-child(2)', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'expertLogo4In',
					duration:	1800,
					offset	:	2.4*h,
					tween	:	TweenMax.from('#team .expert-team-block:nth-child(4)', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'expertLogo3In',
					duration:	1800,
					offset	:	2.5*h,
					tween	:	TweenMax.from('#team .expert-team-block:nth-child(3)', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'expertLogo5In',
					duration:	1800,
					offset	:	2.6*h,
					tween	:	TweenMax.from('#team .expert-team-block:nth-child(5)', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'expertLogo1In',
					duration:	1800,
					offset	:	2.7*h,
					tween	:	TweenMax.from('#team .expert-team-block:nth-child(1)', 1, {y: h, ease: Power2.easeOut})
				},
				{
					name	:	'expertLogosOut',
					duration:	1800,
					offset	:	4.1*h,
					tween	: 	TweenMax.to('#team .expert-team', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'expertLogo6In',
					duration:	1800,
					offset	:	3.9*h,
					tween	:	TweenMax.to('#team .expert-team-block:nth-child(6)', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'expertLogo2In',
					duration:	1800,
					offset	:	4*h,
					tween	:	TweenMax.to('#team .expert-team-block:nth-child(2)', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'expertLogo4In',
					duration:	1800,
					offset	:	4.1*h,
					tween	:	TweenMax.to('#team .expert-team-block:nth-child(4)', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'expertLogo3In',
					duration:	1800,
					offset	:	4.2*h,
					tween	:	TweenMax.to('#team .expert-team-block:nth-child(3)', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'expertLogo5In',
					duration:	1800,
					offset	:	4.3*h,
					tween	:	TweenMax.to('#team .expert-team-block:nth-child(5)', 1, {y: -h, ease: Power2.easeIn})
				},
				{
					name	:	'expertLogo1In',
					duration:	1800,
					offset	:	4.4*h,
					tween	:	TweenMax.to('#team .expert-team-block:nth-child(1)', 1, {y: -h, ease: Power2.easeIn})
				},

			]
		},
		// {
		// 	section			:	'#footer',
		// 	hook			:	'onEnter',
		// 	scenes: [
		// 		{
		// 			name	:	'logoTransformBack',
		// 			duration:	h,
		// 			offset	:	0,
		// 			tween	:	TweenMax.from('#hero .hero-logo', 1, {y: 534, x: 816, scale: .3, rotation: 360, ease:Power2.easeInOut})
		// 		},
		// 		{
		// 			name	:	'heroBGOut',
		// 			duration:	0,
		// 			offset	:	-h,
		// 			tween	:	TweenMax.from('#hero .hero-bg', 1, {y: -500, ease: Linear.easeNone}) //prev: y:-735
		// 		},
		// 	]
		// },
	];
	function setupScrollScenes(keyframes) {
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
	setupScrollScenes(combinedKeyframes);


	// Init Slick Timeline Carousel
	// -------------------------------------------------------------------------
	$('#timeline .timeline-carousel').slick({
		infinite: true,
		speed: 500,
		arrows: true,
		prevArrow: $('.timeline-arrow--prev'),
		nextArrow: $('.timeline-arrow--next'),
		dots: true,
		pauseOnHover: false,
		// responsive: [{
		// 	breakpoint: 1023,
		// 	settings: { dots: false }
		// }]
	});



});
