import { TweenMax } from 'gsap'
import Viewport from '../utils/Viewport'

let h = Viewport.wh

const siteKeyframes = {
	section			:	'#site',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	.25*h,
			tween	:	TweenMax.from('#site .section__title', 1, {y: h*1.2, ease: Power2.easeOut})
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	9.75*h,
			tween	: 	TweenMax.to('#site .section__title', 1, {y: -h, ease: Power2.easeIn})
		},
		{
			name	:	'p1In',
			duration:	1800,
			offset	:	.65*h,
			tween	: 	TweenMax.from('#site .p1', 1, {y: h, ease: Power2.easeOut})
		},
		{
			name	:	'p1Out',
			duration:	1800,
			offset	:	10*h,
			tween	: 	TweenMax.to('#site .p1', 1, {y: -h, ease: Power2.easeIn})
		},
		{
			name	:	'p2In',
			duration:	1800,
			offset	:	.85*h,
			tween	: 	TweenMax.from('#site .p2', 1, {y: h, ease: Power2.easeOut})
		},
		{
			name	:	'p2Out',
			duration:	1800,
			offset	:	10.25*h,
			tween	: 	TweenMax.to('#site .p2', 1, {y: -h, ease: Power2.easeIn})
		},
		{
			name	:	'p3In',
			duration:	1800,
			offset	:	h,
			tween	: 	TweenMax.from('#site .p3', 1, {y: h, ease: Power2.easeOut})
		},
		{
			name	:	'p3Out',
			duration:	1800,
			offset	:	10.25*h,
			tween	: 	TweenMax.to('#site .p3', 1, {y: -h*2, ease: Power2.easeIn})
		},
		{
			name	:	'pattern1In',
			duration:	2400,
			offset	:	.75*h,
			tween	: 	TweenMax.from('#site .bg-pattern-1', 1, {y: h*1.5, ease: Power2.easeOut})
		},
		{
			name	:	'pattern1Out',
			duration:	2400,
			offset	:	10.25*h,
			tween	: 	TweenMax.to('#site .bg-pattern-1', 1, {y: -h*2, ease: Power2.easeIn})
		},
		{
			name	:	'pattern2In',
			duration:	2400,
			offset	:	h,
			tween	: 	TweenMax.from('#site .bg-pattern-2', 1, {y: h*1.5, ease: Power2.easeOut})
		},
		// {
		// 	name	:	'pattern2Move',
		// 	duration:	2400,
		// 	offset	:	10.25*h,
		// 	tween	: 	TweenMax.to('#site .bg-pattern-2', 1, {y: -h, ease: Power2.easeIn})
		// },
		{
			name	:	'pattern2Out',
			duration:	2400,
			offset	:	10.5*h,
			tween	: 	TweenMax.to('#site .bg-pattern-2', 1, {y: -h*2, ease: Power2.easeIn})
		},
		{
			name	:	'image00Thru',
			duration:	2700,
			offset	:	3.25*h,
			tween	: 	TweenMax.fromTo('#site .image-00', 1, {y: 2*h}, {y: -0.25*h, ease: Linear.easeNone})
		},
		{
			name	:	'image01Thru',
			duration:	4000,
			offset	:	4*h,
			tween	: 	TweenMax.fromTo('#site .image-01', 1, {y: 2.5*h}, {y: -0.25*h, ease: Linear.easeNone})
		},
		{
			name	:	'image02Thru',
			duration:	4200,
			offset	:	5.25*h,
			tween	: 	TweenMax.fromTo('#site .image-02', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
		},
		{
			name	:	'image03Thru',
			duration:	4200,
			offset	:	6*h,
			tween	: 	TweenMax.fromTo('#site .image-03', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
		},
		{
			name	:	'image04Thru',
			duration:	6000,
			offset	:	6.25*h,
			tween	: 	TweenMax.fromTo('#site .image-04', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
		},
		{
			name	:	'image05Thru',
			duration:	3000,
			offset	:	6.5*h,
			tween	: 	TweenMax.fromTo('#site .image-05', 1, {y: 2*h}, {y: 0, ease: Linear.easeNone})
		},
		{
			name	:	'mapIn',
			duration:	1800,
			offset	:	10.75*h,
			tween	: 	TweenMax.from('#site .map', 1, {y: h*1.5, x: -800, ease: Power2.easeOut})
		},
		{
			name	:	'mapOut',
			duration:	1800,
			offset	:	13.25*h,
			tween	: 	TweenMax.to('#site .map', 1, {y: -h*2, x: 800, ease: Power2.easeIn})
		},
	]
}

export default siteKeyframes
