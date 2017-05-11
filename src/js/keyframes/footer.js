import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh;

const footerKeyframes = {
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

export default footerKeyframes
