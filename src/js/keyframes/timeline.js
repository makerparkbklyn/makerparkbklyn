import Viewport from '../utils/Viewport'

const timelineKeyframes = () => {
	Viewport.update()

	let wh = Viewport.wh
	let ww = Viewport.ww

	return {
		section			:	'#timeline',
		hook			:	'onEnter',
		scenes: [
			{
				name	: 	'08Slide',
				duration: 	0,
				offset	: 	1.5 * wh,
				index 	:	8,
				hook	: 	'onLeave'
			},
			// {
			// 	name	:	'spinningTankThru',
			// 	duration:	2.5 * wh,
			// 	offset	:	-0.5 * wh,
			// 	element	:	'#timeline .spinning-tank',
			// 	tween	: 	[
			// 					{x: -0.25 * ww, rotation: -360,},
			// 					{x: 1.25 * ww, rotation: 180, ease: Linear.easeNone}
			// 				]
			// },
			{
				name	:	'titleIn',
				duration:	1.4 * wh,
				offset	:	0.25 * wh,
				element :	'#timeline .section__title-xl',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'titleOut',
				duration:	1.4 * wh,
				offset	:	3 * wh,
				element :	'#timeline .section__title-xl',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'carouselIn',
				duration:	1.4 * wh,
				offset	:	0.4 * wh,
				element :	'#timeline .timeline-carousel',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'carouselOut',
				duration:	1.4 * wh,
				offset	:	3.1 * wh,
				element :	'#timeline .timeline-carousel',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'carouselDotsIn',
				duration:	1.8 * wh,
				offset	:	0.75 * wh,
				element :	'#timeline .slick-dots',
				tween	: 	{y: 0.9 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'arrowPrevIn',
				duration:	1.4 * wh,
				offset	:	0.75 * wh,
				element :	'#timeline .timeline-arrow--prev',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'arrowNextIn',
				duration:	1.4 * wh,
				offset	:	0.75 * wh,
				element :	'#timeline .timeline-arrow--next',
				tween	: 	{y: 1.04 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'arrowPrevOut',
				duration:	wh,
				offset	:	3.25 * wh,
				element :	'#timeline .timeline-arrow--prev',
				tween	: 	{y: -0.75 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'arrowNextOut',
				duration:	wh,
				offset	:	3.25 * wh,
				element :	'#timeline .timeline-arrow--next',
				tween	: 	{y: -0.85 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern1Thru',
				duration:	6 * wh,
				offset	:	0 * wh,
				element :	'#timeline .bg-pattern-1',
				tween	: 	[
								{y: wh},
								{y: -3.2 * wh, ease: Power2.easeInOut}
							]
			},
		]
	}
}

export default timelineKeyframes
