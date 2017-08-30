import Viewport from '../utils/Viewport'

const footerKeyframes = () => {
	Viewport.update()

	let wh = Viewport.wh;

	return {
		section			:	'#footer',
		hook			:	'onEnter',
		scenes: [
			{
				name	: 	'14Slide',
				duration: 	0,
				offset	: 	1.5 * wh,
				index 	:	14,
				hook	: 	'onLeave'
			},
			{
				name	:	'footerInToggle',
				element :	'.footer',
				class 	:	'in',
				duration:	0,
				offset 	:	0
			},
			{
				name	:	'tankLeftIn',
				duration:	wh,
				offset	:	0.5 * wh,
				element	:	'#footer .tank.left',
				tween	:	{x: -1000, scale: 0.5, ease: Power2.easeOut}
			},
			{
				name	:	'tankRightIn',
				duration:	wh,
				offset	:	0.5 * wh,
				element	:	'#footer .tank.right',
				tween	:	{x: 1000, scale: 0.5, ease: Power2.easeOut}
			},
			{
				name	:	'hashtagIn',
				duration:	wh,
				offset	:	0.25 * wh,
				element	:	'#footer .footer__hashtag',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'instagramIn',
				duration:	0.75 * wh,
				offset	:	1 * wh,
				element	:	'#footer .footer__social-button--instagram svg',
				tween	:	{y: 10, scale: 0, rotation: 45, opacity: 0, ease: Power2.easeOut}
			},
			{
				name	:	'facebookIn',
				duration:	0.75 * wh,
				offset	:	1 * wh,
				element	:	'#footer .footer__social-button--facebook svg',
				tween	:	{y: 10, scale: 0, rotation: 45, opacity: 0, ease: Power2.easeOut}
			},
		]
	}
}

export default footerKeyframes
