import Viewport from '../utils/Viewport'

const signupKeyframes = () => {
	Viewport.update()

	let wh = Viewport.wh

	return {
		section			:	'#signup',
		hook			:	'onEnter',
		scenes: [
			{
				name	: 	'10Slide',
				duration: 	0,
				offset	: 	1.25 * wh,
				index 	:	10,
				hook	: 	'onLeave'
			},
			{
				name	:	'titleIn',
				duration:	1.4 * wh,
				offset	:	0,
				element :	'#signup .section__title-xl',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'titleOut',
				duration:	1.4 * wh,
				offset	:	2.2 * wh,
				element :	'#signup .section__title-xl',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p1In',
				duration:	1.4 * wh,
				offset	:	0.25 * wh,
				element :	'#signup .p1',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p1Out',
				duration:	wh,
				offset	:	2.3 * wh,
				element :	'#signup .p1',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p2In',
				duration:	1.4 * wh,
				offset	:	0.5 * wh,
				element :	'#signup .p2',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'firstNameIn',
				duration:	1.4 * wh,
				offset	:	0.5 * wh,
				element :	'#signup .signup__first-name',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'lastNameIn',
				duration:	1.4 * wh,
				offset	:	0.55 * wh,
				element :	'#signup .signup__last-name',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'emailIn',
				duration:	1.4 * wh,
				offset	:	0.6 * wh,
				element :	'#signup .signup__email',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'volunteerIn',
				duration:	1.4 * wh,
				offset	:	0.65 * wh,
				element :	'#signup .signup__volunteer',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'commentsIn',
				duration:	1.4 * wh,
				offset	:	0.7 * wh,
				element :	'#signup .signup__comments',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'submitIn',
				duration:	1.4 * wh,
				offset	:	0.75 * wh,
				element :	'#signup .signup__submit',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p2Out',
				duration:	0.9 * wh,
				offset	:	2.5 * wh,
				element :	'#signup .p2',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'firstNameOut',
				duration:	0.9 * wh,
				offset	:	2.5 * wh,
				element :	'#signup .signup__first-name',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'lastNameOut',
				duration:	0.9 * wh,
				offset	:	2.55 * wh,
				element :	'#signup .signup__last-name',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'emailOut',
				duration:	0.9 * wh,
				offset	:	2.575 * wh,
				element :	'#signup .signup__email',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'volunteerOut',
				duration:	0.9 * wh,
				offset	:	2.6 * wh,
				element :	'#signup .signup__volunteer',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'commentsOut',
				duration:	0.9 * wh,
				offset	:	2.625 * wh,
				element :	'#signup .signup__comments',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'submitOut',
				duration:	0.9 * wh,
				offset	:	2.65 * wh,
				element :	'#signup .signup__submit',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern1In',
				duration:	1.4 * wh,
				offset	:	0.5 * wh,
				element :	'#signup .bg-pattern-1',
				tween	: 	{y: 2 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'pattern1Out',
				duration:	1.5 * wh,
				offset	:	2.5 * wh,
				element :	'#signup .bg-pattern-1',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern2In',
				duration:	1.4 * wh,
				offset	:	0.5 * wh,
				element :	'#signup .bg-pattern-2',
				tween	: 	{y: 2 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'pattern2Out',
				duration:	1.67 * wh,
				offset	:	2.25 * wh,
				element :	'#signup .bg-pattern-2',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern3In',
				duration:	1.2 * wh,
				offset	:	0.5 * wh,
				element :	'#signup .bg-pattern-3',
				tween	: 	{y: 2 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'pattern3Out',
				duration:	1.5 * wh,
				offset	:	2.5 * wh,
				element :	'#signup .bg-pattern-3',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
		]
	}
}

export default signupKeyframes
