import { Power2 } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh

const principlesKeyframes = {
	section			:	'#principles',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0.5 * wh,
			element :	'.section__title',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1680,
			offset	:	2.5 * wh,
			element :	'.section__title',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'listIn',
			duration:	1800,
			offset	:	0.75 * wh,
			element :	'.principles__list',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'listOut',
			duration:	2000,
			offset	:	2.5 * wh,
			element :	'.principles__list',
			tween	:	{y: -2.25 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'pattern1In',
			duration:	2400,
			offset	:	0.6 * wh,
			element :	'.bg-pattern-1',
			tween	: 	{y: 2 * wh, x: 200, ease: Power2.easeOut}
		},
		{
			name	:	'pattern1Out',
			duration:	2400,
			offset	:	2.5 * wh,
			element :	'.bg-pattern-1',
			tween	: 	{y: -2 * wh, x: 400, ease: Power2.easeIn}
		},
		{
			name	:	'pattern2In',
			duration:	2000,
			offset	:	0.5 * wh,
			element :	'.bg-pattern-2',
			tween	: 	{y: 2 * wh, x: -800, ease: Power2.easeOut}
		},
		{
			name	:	'pattern2Out',
			duration:	3000,
			offset	:	2.5 * wh,
			element :	'.bg-pattern-2',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
	]
}

export default principlesKeyframes
