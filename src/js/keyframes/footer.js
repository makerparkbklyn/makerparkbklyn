import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh;

const footerKeyframes = {
	section			:	'#footer',
	hook			:	'onEnter',
	scenes: [
		// {
		// 	name	:	'heroBGOut',
		// 	duration:	wh,
		// 	offset	:	0,
		// 	element	:	'.hero-bg',
		// 	tween	:	{y: -500, ease: Linear.easeNone}
		// },
		// {
		// 	name	:	'logoMove',
		// 	duration:	wh,
		// 	offset	:	0,
		// 	element	:	'.hero-logo',
		// 	tween	:	{y: 534, x: 816, scale: .3, rotation: 360, ease: Power2.easeInOut}
		// }
	]
}

export default footerKeyframes
