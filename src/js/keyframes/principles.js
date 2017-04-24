export default const principlesKeyframes = 	{
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
	};
