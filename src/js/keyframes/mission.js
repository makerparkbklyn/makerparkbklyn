import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

const missionKeyframes = () => {

	Viewport.update()

	let wh = Viewport.wh

	return {
		section			:	'#mission',
		hook			:	'onEnter',
		scenes: [
			{
				name	:	'titleIn',
				duration:	1.4 * wh,
				offset	:	0.5 * wh,
				element	:	'#mission .section__title-xl',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'titleOut',
				duration:	1.4 * wh,
				offset	:	3 * wh,
				element	:	'#mission .section__title-xl',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p1In',
				duration:	1.4 * wh,
				offset	:	0.75 * wh,
				element	:	'#mission .p1',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p1Out',
				duration:	1.4 * wh,
				offset	:	3.25 * wh,
				element	:	'#mission .p1',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p2In',
				duration:	1.4 * wh,
				offset	:	wh,
				element	:	'#mission .p2',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p2Out',
				duration:	1.4 * wh,
				offset	:	3.25 * wh,
				element	:	'#mission .p2',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern1Thru',
				duration:	6 * wh,
				offset	:	0.5 * wh,
				element	:	'#mission .bg-pattern-1',
				tween	: 	[
					{y: 1.5 * wh},
					{y: -1.75 * wh, ease: Linear.easeNone}
				]
			},
			{
				name	:	'pattern2Thru',
				duration:	7.5 * wh,
				offset	:	2 * wh,
				element	:	'#mission .bg-pattern-2',
				tween	: 	[
					{y: 1.5 * wh},
					{y: -2 * wh, ease: Linear.easeNone}
				]
			},
			{
				name	:	'renderingIn',
				duration:	1.4 * wh,
				offset	:	4.25 * wh,
				element	:	'#mission .rendering',
				tween	: 	{y: wh, x: -800, ease: Power2.easeOut}
			},
			{
				name	:	'renderingOut',
				duration:	1.4 * wh,
				offset	:	7.25 * wh,
				element	:	'#mission .rendering',
				tween	: 	{y: -wh, x: 800, ease: Power2.easeIn}
			}
		],
	}
}

export default missionKeyframes
