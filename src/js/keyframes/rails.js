import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh;

const leftRailKeyframes = {
	section			:	'.rail--left',
	hook			:	'onLeave',
	scenes			: 	[
		{
			name	:	'arrowMove',
			duration:	wh * 0.25,
			offset	:	60,
			element	:	'.arrow-down',
			tween	:	{y: 100, ease: Power2.easeIn}
		},

	]

}

export default leftRailKeyframes

// const rightRailKeyframes = {
// 	section			:	'#hero',
// 	hook			:	'onLeave',
// 	scenes			: 	[
// 		// {
// 		// 	name	:	'logoIn',
// 		// 	duration:	wh,
// 		// 	offset	:	54.5 * wh,
// 		// 	element	:	'.hero-logo',
// 		// 	tween	:	{}
// 		// },
// 		{
// 			name	:	'logoMove',
// 			duration:	wh,
// 			offset	:	0,
// 			element	:	'.hero-logo',
// 			tween	:	{}
// 		},
//
// 	]
//
// }
