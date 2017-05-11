import { Power2 } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh

const newsKeyframes = {
	section			:	'#news',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0,
			element :	'#news .section__title-xl',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	1.75 * wh,
			element :	'#news .section__title-xl',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'newsItem1In',
			duration:	1800,
			offset	:	0.4 * wh,
			element :	'#news .news-block:nth-child(1)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'newsItem2In',
			duration:	1800,
			offset	:	0.3 * wh,
			element :	'#news .news-block:nth-child(2)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'newsItem3In',
			duration:	1800,
			offset	:	0.25 * wh,
			element :	'#news .news-block:nth-child(3)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'newsItem4In',
			duration:	1800,
			offset	:	0.45 * wh,
			element :	'#news .news-block:nth-child(4)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'newsItem5In',
			duration:	1800,
			offset	:	0.5 * wh,
			element :	'#news .news-block:nth-child(5)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'newsItem6In',
			duration:	1800,
			offset	:	0.35 * wh,
			element :	'#news .news-block:last-child',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'newsItem1Out',
			duration:	1800,
			offset	:	1.9 * wh,
			element :	'#news .news-block:nth-child(1)',
			tween	: 	{y: -1.5 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'newsItem2Out',
			duration:	1800,
			offset	:	1.8 * wh,
			element :	'#news .news-block:nth-child(2)',
			tween	: 	{y: -1.5 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'newsItem3Out',
			duration:	1800,
			offset	:	1.75 * wh,
			element :	'#news .news-block:nth-child(3)',
			tween	: 	{y: -1.5 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'newsItem4Out',
			duration:	1800,
			offset	:	1.95 * wh,
			element :	'#news .news-block:nth-child(4)',
			tween	: 	{y: -1.5 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'newsItem5Out',
			duration:	1800,
			offset	:	2 * wh,
			element :	'#news .news-block:nth-child(5)',
			tween	: 	{y: -1.5 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'newsItem6Out',
			duration:	1800,
			offset	:	1.85 * wh,
			element :	'#news .news-block:last-child',
			tween	: 	{y: -1.5 * wh, ease: Power2.easeIn}
		},
	]
}

export default newsKeyframes
