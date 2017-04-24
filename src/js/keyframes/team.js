export default const teamKeyframes = {
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
};
