export default const missionKeyframes = {
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
};
