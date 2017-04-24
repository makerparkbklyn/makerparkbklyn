export default const newsKeyframes = {
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
};
