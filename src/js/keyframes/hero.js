import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh;

const heroKeyframes = {
	section			:	'#hero',
	hook			:	'onLeave',
	scenes: [
		{
			name	:	'heroBGOut',
			duration:	wh,
			offset	:	0,
			element	:	'.hero-bg',
			tween	:	{y: -735, ease: Linear.easeNone}
		},
		// TODO: need to reverse and adjust this transition at some point
		{
			name	:	'logoMove',
			duration:	wh,
			offset	:	0,
			element	:	'.hero-logo',
			tween	:	{y: 534, x: 816, scale: .3, rotation: 360, ease: Power2.easeInOut}
		},
		// {
		// 	name	:	'logoIn',
		// 	duration:	wh,
		// 	offset	:	53 * wh,
		// 	element	:	'.hero-logo',
		// 	tween	:	{y: 534, x: 816, scale: .3, rotation: 360, ease: Power2.easeInOut}
		// },
		// {
		// 	name	:	'heroBGIn',
		// 	duration:	0,
		// 	offset	:	50 * wh,
		// 	element	:	'.hero-bg',
		// 	tween	:	{y: -735, ease: Linear.easeNone}
		// },
	]
}

export default heroKeyframes
