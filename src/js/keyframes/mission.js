import { TweenMax, Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh;

const missionKeyframes = {
	section			:	'#mission',
	hook			:	'onEnter',
	scenes: [
		// {
		// 	name	:	'titleIn',
		// 	duration:	1800,
		// 	offset	:	0.5 * wh,
		// 	element	:	'#mission .section__title',
		// 	tween	:	{y: wh, ease: Power2.easeOut}
		// },
		// {
		// 	name	:	'titleOut',
		// 	duration:	1800,
		// 	offset	:	3 * wh,
		// 	element	:	'#mission .section__title',
		// 	tween	: 	{y: -wh, ease: Power2.easeIn}
		// },
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0.5 * wh,
			tween	:	TweenMax.from('#mission .section__title', 1, {y: wh, ease: Power2.easeOut})
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	3 * wh,
			tween	: 	TweenMax.to('#mission .section__title', 1, {y: -wh, ease: Power2.easeIn})
		},
		// {
		// 	name	:	'p1In',
		// 	duration:	1800,
		// 	offset	:	0.75 * wh,
		// 	tween	: 	TweenMax.from('#mission .p1', 1, {y: wh, ease: Power2.easeOut})
		// },
		// {
		// 	name	:	'p1Out',
		// 	duration:	1800,
		// 	offset	:	3.25 * wh,
		// 	tween	: 	TweenMax.to('#mission .p1', 1, {y: -wh, ease: Power2.easeIn})
		// },
		// {
		// 	name	:	'p2In',
		// 	duration:	1800,
		// 	offset	:	wh,
		// 	tween	: 	TweenMax.from('#mission .p2', 1, {y: wh, ease: Power2.easeOut})
		// },
		// {
		// 	name	:	'p2Out',
		// 	duration:	1800,
		// 	offset	:	3.25 * wh,
		// 	tween	: 	TweenMax.to('#mission .p2', 1, {y: -wh, ease: Power2.easeIn})
		// },
		// {
		// 	name	:	'pattern1Thru',
		// 	duration:	8000,
		// 	offset	:	0.5 * wh,
		// 	tween	: 	TweenMax.fromTo('#mission .bg-pattern-1', 1, {y: 1.5 * wh}, {y: -1.75 * wh, ease: Linear.easeNone})
		// },
		// {
		// 	name	:	'pattern2Thru',
		// 	duration:	10000,
		// 	offset	:	2 * wh,
		// 	tween	: 	TweenMax.fromTo('#mission .bg-pattern-2', 1, {y: 1.5 * wh}, {y: -2 * wh, ease: Linear.easeNone})
		// },
		// {
		// 	name	:	'renderingIn',
		// 	duration:	1800,
		// 	offset	:	4.25 * wh,
		// 	tween	: 	TweenMax.from('#mission .rendering', 1, {y: wh, x: -800, ease: Power2.easeOut})
		// },
		// {
		// 	name	:	'renderingOut',
		// 	duration:	1800,
		// 	offset	:	7.25 * wh,
		// 	tween	: 	TweenMax.to('#mission .rendering', 1, {y: -wh, x: 800, ease: Power2.easeIn})
		// }



		// {
		// 	name	:	'pattern1In',
		// 	duration:	2400,
		// 	offset	:	h/2,
		// 	tween	: 	TweenMax.from('#mission .bg-pattern-1', 1, {y: 2*h, ease: Power2.easeOut})
		// },
		// {
		// 	name	:	'pattern2In',
		// 	duration:	2400,
		// 	offset	:	h/2,
		// 	tween	: 	TweenMax.from('#mission .bg-pattern-2', 1, {y: 2*h, ease: Power2.easeOut})
		// }
	]
}

export default missionKeyframes
