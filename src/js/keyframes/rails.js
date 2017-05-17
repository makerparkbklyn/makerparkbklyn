import Viewport from '../utils/Viewport'

const leftRailKeyframes = () => {
	Viewport.update()
	
	let wh = Viewport.wh;

	return {
		section			:	'.rail--left',
		hook			:	'onLeave',
		scenes			: 	[
			{
				name	:	'arrowMove',
				duration:	wh * 0.25,
				offset	:	60,
				element	:	'.rail--left .arrow-down',
				tween	:	{y: 100, ease: Power2.easeIn}
			},

		]
	}
}

export default leftRailKeyframes
