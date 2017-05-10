import { Power2 } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh

const signupKeyframes = {
	section			:	'#signup',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0,
			element :	'.section__title-xl',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	2.2 * wh,
			element :	'.section__title-xl',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'p1In',
			duration:	1800,
			offset	:	0.25 * wh,
			element :	'.p1',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'p1Out',
			duration:	1400,
			offset	:	2.3 * wh,
			element :	'.p1',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'firstNameIn',
			duration:	1800,
			offset	:	0.5 * wh,
			element :	'.signup__first-name',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'lastNameIn',
			duration:	1800,
			offset	:	0.55 * wh,
			element :	'.signup__last-name',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'emailIn',
			duration:	1800,
			offset	:	0.6 * wh,
			element :	'.signup__email',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'volunteerIn',
			duration:	1800,
			offset	:	0.65 * wh,
			element :	'.signup__volunteer',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'commentsIn',
			duration:	1800,
			offset	:	0.7 * wh,
			element :	'.signup__comments',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'submitIn',
			duration:	1800,
			offset	:	0.75 * wh,
			element :	'.signup__submit',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'firstNameOut',
			duration:	1200,
			offset	:	2.5 * wh,
			element :	'.signup__first-name',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'lastNameOut',
			duration:	1200,
			offset	:	2.55 * wh,
			element :	'.signup__last-name',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'emailOut',
			duration:	1200,
			offset	:	2.575 * wh,
			element :	'.signup__email',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'volunteerOut',
			duration:	1200,
			offset	:	2.6 * wh,
			element :	'.signup__volunteer',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'commentsOut',
			duration:	1200,
			offset	:	2.625 * wh,
			element :	'.signup__comments',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'submitOut',
			duration:	1200,
			offset	:	2.65 * wh,
			element :	'.signup__submit',
			tween	:	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'pattern1In',
			duration:	1800,
			offset	:	0.5 * wh,
			element :	'.bg-pattern-1',
			tween	: 	{y: 2 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'pattern1Out',
			duration:	2000,
			offset	:	2.5 * wh,
			element :	'.bg-pattern-1',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'pattern2In',
			duration:	1800,
			offset	:	0.5 * wh,
			element :	'.bg-pattern-2',
			tween	: 	{y: 2 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'pattern2Out',
			duration:	2200,
			offset	:	2.25 * wh,
			element :	'.bg-pattern-2',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'pattern3In',
			duration:	1600,
			offset	:	0.5 * wh,
			element :	'.bg-pattern-3',
			tween	: 	{y: 2 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'pattern3Out',
			duration:	2000,
			offset	:	2.5 * wh,
			element :	'.bg-pattern-3',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
	]
}

export default signupKeyframes
