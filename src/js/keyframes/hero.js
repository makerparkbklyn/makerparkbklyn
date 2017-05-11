import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'
import $ from 'jquery'

let wh = Viewport.wh;

const onLogoInEnd = (e) => {
	if ( e.scrollDirection != 'REVERSE' ) {
		$('.hero-logo svg').attr('style', '')
	}
}

const setupScenes = (scenes) => {
	Viewport.update()

	const $logo = $('#hero .hero-logo')

	let scale = 0,
		$logoWidth = $logo.width(),
		$logoHeight = $logo.height(),
		centerX = $logo.offset().left + $logoWidth / 2,
		centerY = $logo.offset().top + $logoHeight / 2,
		offsetX,
		offsetY

	if ( Viewport.ww <= 768 ) {
		scale = 2
	}
	else if ( Viewport.ww <= 1280 ) {
		scale = 2.5
	}
	else {
		scale = 3.214285714
	}

	offsetX = Viewport.ww / 2 - centerX,
	offsetY = Viewport.wh / 2 - centerY

	scenes[0].tween = {x: offsetX, y: offsetY, scale, rotation: -360, ease: Power2.easeInOut, force3D: false}
	scenes[1].tween = {x: offsetX, y: offsetY, scale, rotation: -360, ease: Power2.easeInOut, force3D: false}
}


const heroKeyframes = {
	section			:	'#hero',
	hook			:	'onLeave',
	scenes			: 	[
		{
			name	:	'logoIn',
			duration:	wh,
			offset	:	0,
			element	:	'#hero .hero-logo svg',
			tween	:	{},
			events	:	{
				end :	onLogoInEnd
			}
		},
		{
			name	:	'logoOut',
			trigger	:	'.footer',
			hook	:	'onEnter',
			duration:	wh,
			offset	:	0,
			element	:	'#hero .hero-logo svg',
			tween	:	{}
		},

	],
	setup			:	setupScenes,
	refresh			:	setupScenes
}

export default heroKeyframes
