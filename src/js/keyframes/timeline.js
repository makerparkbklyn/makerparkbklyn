import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh

const timelineKeyframes = {
	section			:	'#timeline',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0.25 * wh,
			element :	'#timeline .section__title-xl',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	3 * wh,
			element :	'#timeline .section__title-xl',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'carouselIn',
			duration:	1800,
			offset	:	0.4 * wh,
			element :	'#timeline .timeline-carousel',
			tween	: 	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'carouselOut',
			duration:	1800,
			offset	:	3.1 * wh,
			element :	'#timeline .timeline-carousel',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'carouselDotsIn',
			duration:	2400,
			offset	:	0.75 * wh,
			element :	'#timeline .slick-dots',
			tween	: 	{y: 1200, ease: Power2.easeOut}
		},
		{
			name	:	'arrowPrevIn',
			duration:	1800,
			offset	:	0.75 * wh,
			element :	'#timeline .timeline-arrow--prev',
			tween	: 	{y: 800, ease: Power2.easeOut}
		},
		{
			name	:	'arrowNextIn',
			duration:	1800,
			offset	:	0.75 * wh,
			element :	'#timeline .timeline-arrow--next',
			tween	: 	{y: 840, ease: Power2.easeOut}
		},
		{
			name	:	'arrowPrevOut',
			duration:	1400,
			offset	:	3.25 * wh,
			element :	'#timeline .timeline-arrow--prev',
			tween	: 	{y: -0.75 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'arrowNextOut',
			duration:	1400,
			offset	:	3.25 * wh,
			element :	'#timeline .timeline-arrow--next',
			tween	: 	{y: -0.85 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'pattern1Thru',
			duration:	6.5 * wh,
			offset	:	-0.25 * wh,
			element :	'#timeline .bg-pattern-1',
			tween	: 	[
							{y: wh},
							{y: -3.2 * wh, ease: Power2.easeInOut}
						]
		},
	]
}

export default timelineKeyframes
