import $ from 'jquery'
import Viewport from '../utils/Viewport'

const heroKeyframes = () => {
	Viewport.update()

	const $logo = $('#hero .hero-logo svg')

	let wh = Viewport.wh,
		scale = 0,
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

	return {
		section			:	'#hero',
		hook			:	'onLeave',
		scenes			: 	[
			{
				name	:	'logoIn',
				duration:	wh,
				offset	:	0,
				element	:	'#hero .hero-logo svg',
				tween	:	{
								x: offsetX,
								y: offsetY,
								scale,
								rotation: -360,
								ease: Power2.easeInOut,
								force3D: false,
								overwrite: 'none'
							},
			},
			{
				name	:	'logoOut',
				trigger	:	'.footer',
				hook	:	'onEnter',
				duration:	wh,
				offset	:	0,
				element	:	'#hero .hero-logo svg',
				tween	:	{
								x: offsetX,
								y: offsetY,
								scale,
								rotation: -360,
								ease: Power2.easeInOut,
								force3D: false,
								overwrite: 'none'
							},
			},
		],
	}
}

export default heroKeyframes
