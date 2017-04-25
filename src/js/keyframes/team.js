import { Power2 } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh

const teamKeyframes = {
	section			:	'#team',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0,
			element :	'.section__title',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	1.75 * wh,
			element :	'.section__title',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'teamPhotoIn',
			duration:	1800,
			offset	:	.25 * wh,
			element :	'.team-photo',
			tween	: 	{y: wh, x: -800, ease: Power2.easeOut}
		},
		{
			name	:	'teamPhotoOut',
			duration:	1800,
			offset	:	1.75 * wh,
			element :	'.team-photo',
			tween	: 	{y: -wh, x: 800, ease: Power2.easeIn}
		},
		{
			name	:	'pattern1In',
			duration:	1800,
			offset	:	0.25 * wh,
			element :	'.bg-pattern-1',
			tween	: 	{y: 1.5 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'pattern1Out',
			duration:	1800,
			offset	:	2 * wh,
			element :	'.bg-pattern-1',
			tween	: 	{y: -2 * wh, x: 600, ease: Power2.easeIn}
		},
		{
			name	:	'expertLogosIn',
			duration:	1800,
			offset	:	2.5 * wh,
			element :	'.expert-team',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'expertLogo6In',
			duration:	1800,
			offset	:	2.2 * wh,
			element :	'.expert-team-block:nth-child(6)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'expertLogo2In',
			duration:	1800,
			offset	:	2.3 * wh,
			element : 	'.expert-team-block:nth-child(2)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'expertLogo4In',
			duration:	1800,
			offset	:	2.4 * wh,
			element :	'.expert-team-block:nth-child(4)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'expertLogo3In',
			duration:	1800,
			offset	:	2.5 * wh,
			element :	'.expert-team-block:nth-child(3)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'expertLogo5In',
			duration:	1800,
			offset	:	2.6 * wh,
			element :	'.expert-team-block:nth-child(5)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'expertLogo1In',
			duration:	1800,
			offset	:	2.7 * wh,
			element :	'.expert-team-block:nth-child(1)',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'expertLogosOut',
			duration:	1800,
			offset	:	4.1 * wh,
			element :	'.expert-team',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'expertLogo6Out',
			duration:	1800,
			offset	:	3.9 * wh,
			element :	'.expert-team-block:nth-child(6)',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'expertLogo2Out',
			duration:	1800,
			offset	:	4 * wh,
			element :	'.expert-team-block:nth-child(2)',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'expertLogo4Out',
			duration:	1800,
			offset	:	4.1 * wh,
			element :	'.expert-team-block:nth-child(4)',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'expertLogo3Out',
			duration:	1800,
			offset	:	4.2 * wh,
			element :	'.expert-team-block:nth-child(3)',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'expertLogo5Out',
			duration:	1800,
			offset	:	4.3 * wh,
			element :	'.expert-team-block:nth-child(5)',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'expertLogo1Out',
			duration:	1800,
			offset	:	4.4 * wh,
			element :	'.expert-team-block:nth-child(1)',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},

	]
}

export default teamKeyframes
