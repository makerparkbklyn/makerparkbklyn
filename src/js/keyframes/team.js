import Viewport from '../utils/Viewport'

const teamKeyframes = () => {
	Viewport.update()

	let wh = Viewport.wh

	return {
		section			:	'#team',
		hook			:	'onEnter',
		scenes: [
			{
				name	: 	'12Slide',
				duration: 	0,
				offset	: 	0.9 * wh,
				index 	:	12,
				hook	: 	'onLeave'
			},
			{
				name	: 	'13Slide',
				duration:	0,
				offset	: 	3.5 * wh,
				index 	:	13,
				hook	: 	'onLeave'
			},
			{
				name	:	'titleIn',
				duration:	1.4 * wh,
				offset	:	0,
				element :	'#team .section__title-xl',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'titleOut',
				duration:	1.4 * wh,
				offset	:	1.75 * wh,
				element :	'#team .section__title-xl',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'teamPhotoIn',
				duration:	1.4 * wh,
				offset	:	.25 * wh,
				element :	'#team .team-photo',
				tween	: 	{y: wh, x: -800, ease: Power2.easeOut}
			},
			{
				name	:	'teamPhotoOut',
				duration:	1.4 * wh,
				offset	:	1.75 * wh,
				element :	'#team .team-photo',
				tween	: 	{y: -wh, x: 800, ease: Power2.easeIn}
			},
			{
				name	:	'pattern1In',
				duration:	1.4 * wh,
				offset	:	0.25 * wh,
				element :	'#team .bg-pattern-1',
				tween	: 	{y: 1.5 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'pattern1Out',
				duration:	1.4 * wh,
				offset	:	2 * wh,
				element :	'#team .bg-pattern-1',
				tween	: 	{y: -2 * wh, x: 600, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo1In',
				duration:	1.4 * wh,
				offset	:	2.6 * wh,
				element :	'#team .expert-team-block:nth-child(1)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo2In',
				duration:	1.4 * wh,
				offset	:	2.65 * wh,
				element : 	'#team .expert-team-block:nth-child(2)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo3In',
				duration:	1.4 * wh,
				offset	:	2.7 * wh,
				element :	'#team .expert-team-block:nth-child(3)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo4In',
				duration:	1.4 * wh,
				offset	:	2.75 * wh,
				element :	'#team .expert-team-block:nth-child(4)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo5In',
				duration:	1.4 * wh,
				offset	:	2.8 * wh,
				element :	'#team .expert-team-block:nth-child(5)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo6In',
				duration:	1.4 * wh,
				offset	:	2.85 * wh,
				element :	'#team .expert-team-block:nth-child(6)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo7In',
				duration:	1.4 * wh,
				offset	:	2.9 * wh,
				element :	'#team .expert-team-block:nth-child(7)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo8In',
				duration:	1.4 * wh,
				offset	:	2.95 * wh,
				element :	'#team .expert-team-block:nth-child(8)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo9In',
				duration:	1.4 * wh,
				offset	:	3 * wh,
				element :	'#team .expert-team-block:nth-child(9)',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'expertLogo1Out',
				duration:	1.4 * wh,
				offset	:	4.5 * wh,
				element :	'#team .expert-team-block:nth-child(1)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo2Out',
				duration:	1.4 * wh,
				offset	:	4.6 * wh,
				element :	'#team .expert-team-block:nth-child(2)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo3Out',
				duration:	1.4 * wh,
				offset	:	4.7 * wh,
				element :	'#team .expert-team-block:nth-child(3)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo4Out',
				duration:	1.4 * wh,
				offset	:	4.8 * wh,
				element :	'#team .expert-team-block:nth-child(4)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo5Out',
				duration:	1.4 * wh,
				offset	:	4.9 * wh,
				element :	'#team .expert-team-block:nth-child(5)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo6Out',
				duration:	1.4 * wh,
				offset	:	5 * wh,
				element :	'#team .expert-team-block:nth-child(6)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo7Out',
				duration:	1.4 * wh,
				offset	:	5.1 * wh,
				element :	'#team .expert-team-block:nth-child(7)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo8Out',
				duration:	1.4 * wh,
				offset	:	5.2 * wh,
				element :	'#team .expert-team-block:nth-child(8)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'expertLogo9Out',
				duration:	1.4 * wh,
				offset	:	5.3 * wh,
				element :	'#team .expert-team-block:nth-child(9)',
				tween	:	{y: -wh, ease: Power2.easeIn}
			},
		]
	}
}

export default teamKeyframes
