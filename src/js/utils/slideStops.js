import $ from 'jquery'
import Viewport from '../utils/Viewport'

const slideStops = [
	{
		section			: "hero",
		offsetMultiplier: 0
	},
	{
		section			: "mission",
		offsetMultiplier: 2
	},
	{
		section			: "mission",
		offsetMultiplier: 4.5
	},
	{
		section			: "site",
		offsetMultiplier: 2
	},
	{
		section			: "site",
		offsetMultiplier: 12
	},
	{
		section			: "vision",
		offsetMultiplier: 1.16
	},
	{
		section			: "vision",
		offsetMultiplier: 4.65
	},
	{
		section			: "vision",
		offsetMultiplier: 11
	},
	{
		section			: "timeline",
		offsetMultiplier: 1.5
	},
	{
		section			: "principles",
		offsetMultiplier: 1
	},
	{
		section			: "signup",
		offsetMultiplier: 1.25
	},
	{
		section			: "news",
		offsetMultiplier: 0.8
	},
	{
		section			: "team",
		offsetMultiplier: 0.9
	},
	{
		section			: "team",
		offsetMultiplier: 3.5
	},
	{
		section			: "footer",
		offsetMultiplier: 1.5
	},
]

const calcStop = (stop) => {
	Viewport.update()
	let wh = Viewport.wh
	let $target = $('#' + stop.section)

	if (Viewport.ww < 1024) {
		return $target.offset().top
	}
	else {
		return $target.offset().top + wh * stop.offsetMultiplier
	}
}

export {slideStops, calcStop}
