export default const timelineKeyframes = {
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
};
