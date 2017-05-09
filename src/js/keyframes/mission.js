import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh;

const missionKeyframes = {
	section			:	'#mission',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0.5 * wh,
			element	:	'.section__title-xl',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	3 * wh,
			element	:	'.section__title-xl',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'p1In',
			duration:	1800,
			offset	:	0.75 * wh,
			element	:	'.p1',
			tween	: 	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'p1Out',
			duration:	1800,
			offset	:	3.25 * wh,
			element	:	'.p1',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'p2In',
			duration:	1800,
			offset	:	wh,
			element	:	'.p2',
			tween	: 	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'p2Out',
			duration:	1800,
			offset	:	3.25 * wh,
			element	:	'.p2',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'pattern1Thru',
			duration:	8000,
			offset	:	0.5 * wh,
			element	:	'.bg-pattern-1',
			tween	: 	[
							{y: 1.5 * wh},
							{y: -1.75 * wh, ease: Linear.easeNone}
						]
		},
		{
			name	:	'pattern2Thru',
			duration:	10000,
			offset	:	2 * wh,
			element	:	'.bg-pattern-2',
			tween	: 	[
							{y: 1.5 * wh},
							{y: -2 * wh, ease: Linear.easeNone}
						]
		},
		{
			name	:	'renderingIn',
			duration:	1800,
			offset	:	4.25 * wh,
			element	:	'.rendering',
			tween	: 	{y: wh, x: -800, ease: Power2.easeOut}
		},
		{
			name	:	'renderingOut',
			duration:	1800,
			offset	:	7.25 * wh,
			element	:	'.rendering',
			tween	: 	{y: -wh, x: 800, ease: Power2.easeIn}
		}
	]
}

export default missionKeyframes
