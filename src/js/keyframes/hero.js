import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'
import $ from 'jquery'

let wh = Viewport.wh;

const heroKeyframes = {
	section			:	'#hero',
	hook			:	'onLeave',
	scenes			: 	[
		// {
		// 	name	:	'heroBGOut',
		// 	duration:	wh,
		// 	offset	:	0,
		// 	element	:	'.hero-bg',
		// 	tween	:	{y: -735, ease: Linear.easeNone}
		// },
		// TODO: need to reverse and adjust this transition at some point


		// {
		// 	name	:	'logoMove',
		// 	duration:	wh,
		// 	offset	:	0,
		// 	element	:	'.hero-logo',
		// 	tween	:	{y: 534, x: 816, scale: .3, rotation: 360, ease: Power2.easeInOut}
		// },
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

heroKeyframes.refresh = (scenes) => {
	// TODO: also adjust scale, etc
	Viewport.update()
	let desiredMargin = 0;
	if ( Viewport.ww <= 768 ) {
		desiredMargin = (0.055/2) * Viewport.ww;
	}

	const $logo = $('#hero .hero-logo')
	let logoWidth = $logo.width(),
		logoHeight = $logo.height(),
		offsetX = ((Viewport.ww / 2) - (desiredMargin + (logoWidth / 4))) + (logoWidth / 2),
		offsetY = ((Viewport.wh / 2) - (desiredMargin + (logoHeight / 4))) - (logoHeight / 2)

	scenes[0] = {
		name	:	'logoMove',
		duration:	wh,
		offset	:	0,
		element	:	'.hero-logo',
		tween	:	{x: offsetX, y: offsetY, scale: 0.5, rotation: 360, ease: Power2.easeInOut}
	}
}

export default heroKeyframes
