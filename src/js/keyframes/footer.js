import Viewport from '../utils/Viewport'

const footerKeyframes = () => {
	Viewport.update()

	let wh = Viewport.wh;

	return {
		section			:	'#footer',
		hook			:	'onEnter',
		scenes: [
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
