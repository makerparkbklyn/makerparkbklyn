import { TweenMax } from 'gsap'
import Viewport from '../utils/Viewport'

let h = Viewport.wh

const signupKeyframes = {
	section			:	'#join',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0,
			tween	:	TweenMax.from('#join .section__title', 1, {y: h, ease: Power2.easeOut})
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	2.2*h,
			tween	: 	TweenMax.to('#join .section__title', 1, {y: -h, ease: Power2.easeIn})
		},
		{
			name	:	'p1In',
			duration:	1800,
			offset	:	0.25*h,
			tween	:	TweenMax.from('#join .p1', 1, {y: h, ease: Power2.easeOut})
		},
		{
			name	:	'p1Out',
			duration:	1400,
			offset	:	2.3*h,
			tween	: 	TweenMax.to('#join .p1', 1, {y: -h, ease: Power2.easeIn})
		},
		{
			name	:	'formIn',
			duration:	1800,
			offset	:	0.5*h,
			tween	:	TweenMax.from('#join .join-form', 1, {y: h, ease: Power2.easeOut})
		},
		{
			name	:	'formOut',
			duration:	1200,
			offset	:	2.5*h,
			tween	: 	TweenMax.to('#join .join-form', 1, {y: -h, ease: Power2.easeIn})
		},
		{
			name	:	'pattern1In',
			duration:	1800,
			offset	:	0.25*h,
			tween	: 	TweenMax.from('#join .bg-pattern-1', 1, {y: h*2, ease: Power2.easeOut})
		},
		{
			name	:	'pattern1Out',
			duration:	2000,
			offset	:	2.5*h,
			tween	: 	TweenMax.to('#join .bg-pattern-1', 1, {y: -h*2, ease: Power2.easeIn})
		},
		{
			name	:	'pattern2In',
			duration:	1800,
			offset	:	0.5*h,
			tween	: 	TweenMax.from('#join .bg-pattern-2', 1, {y: h*2, ease: Power2.easeOut})
		},
		{
			name	:	'pattern2Out',
			duration:	2200,
			offset	:	2.25*h,
			tween	: 	TweenMax.to('#join .bg-pattern-2', 1, {y: -h*2, ease: Power2.easeIn})
		},
		{
			name	:	'pattern3In',
			duration:	1600,
			offset	:	0.5*h,
			tween	: 	TweenMax.from('#join .bg-pattern-3', 1, {y: h*2, ease: Power2.easeOut})
		},
		{
			name	:	'pattern3Out',
			duration:	2000,
			offset	:	2.5*h,
			tween	: 	TweenMax.to('#join .bg-pattern-3', 1, {y: -h*2, ease: Power2.easeIn})
		},
	]
}

export default signupKeyframes
