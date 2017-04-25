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
			element :	'.section__title',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	1.75 * wh,
			element :	'.section__title',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'newsListIn',
			duration:	1800,
			offset	:	0.25 * wh,
			element :	'.news-list',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'newsListOut',
			duration:	1800,
			offset	:	1.5 * wh,
			element :	'.news-list',
			tween	: 	{y: -1.5 * wh, ease: Power2.easeIn}
		},
	]
}

export default newsKeyframes
