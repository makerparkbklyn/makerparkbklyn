import { Power2 } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh

const principlesKeyframes = {
	section			:	'#principles',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0.5 * wh,
			element :	'#principles .section__title-xl',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1680,
			offset	:	2.5 * wh,
			element :	'#principles .section__title-xl',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'principle1Thru',
			duration:	4800,
			offset	:	1.6 * wh,
			element :	'#principles .principles__item:nth-child(1)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle2Thru',
			duration:	4800,
			offset	:	1.7 * wh,
			element :	'#principles .principles__item:nth-child(2)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle3Thru',
			duration:	4800,
			offset	:	1.85 * wh,
			element :	'#principles .principles__item:nth-child(3)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle4Thru',
			duration:	4800,
			offset	:	1.95 * wh,
			element :	'#principles .principles__item:nth-child(4)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle5Thru',
			duration:	4800,
			offset	:	2.1 * wh,
			element :	'#principles .principles__item:nth-child(5)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle6Thru',
			duration:	4800,
			offset	:	2.2 * wh,
			element :	'#principles .principles__item:nth-child(6)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle7Thru',
			duration:	4800,
			offset	:	2.35 * wh,
			element :	'#principles .principles__item:nth-child(7)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle8Thru',
			duration:	4800,
			offset	:	2.45 * wh,
			element :	'#principles .principles__item:nth-child(8)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle9Thru',
			duration:	4800,
			offset	:	2.6 * wh,
			element :	'#principles .principles__item:nth-child(9)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'principle10Thru',
			duration:	4800,
			offset	:	2.7 * wh,
			element :	'#principles .principles__item:nth-child(10)',
			tween	: 	[
							{y: 1.2 * wh},
							{y: -wh, ease: Power2.easeInOut}
						]
		},
		{
			name	:	'pattern1In',
			duration:	2400,
			offset	:	0.8 * wh,
			element :	'#principles .bg-pattern-1',
			tween	: 	{y: 2 * wh, x: 200, ease: Power2.easeOut}
		},
		{
			name	:	'pattern1Out',
			duration:	2750,
			offset	:	2.7 * wh,
			element :	'#principles .bg-pattern-1',
			tween	: 	{y: -2 * wh, x: 400, ease: Power2.easeIn}
		},
		{
			name	:	'pattern2In',
			duration:	2000,
			offset	:	0.7 * wh,
			element :	'#principles .bg-pattern-2',
			tween	: 	{y: 2 * wh, x: -800, ease: Power2.easeOut}
		},
		{
			name	:	'pattern2Out',
			duration:	3000,
			offset	:	2.7 * wh,
			element :	'#principles .bg-pattern-2',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
	]
}

export default principlesKeyframes
