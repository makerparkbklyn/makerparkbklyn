export default const visionKeyframes = {
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
};
