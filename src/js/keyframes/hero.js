import { TweenMax, Power2, Linear } from 'gsap'
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
			tween	:	TweenMax.to('#hero .hero-bg', 1, {y: -500, ease: Linear.easeNone}) //prev: y:-735
		},
		{
			name	:	'logoTransform',
			duration:	wh,
			offset	:	0,
			tween	:	TweenMax.to('#hero .hero-logo', 1, {y: 534, x: 816, scale: .3, rotation: 360, ease: Power2.easeInOut})
		}
	]
}

export default heroKeyframes
