import { Power2, Linear } from 'gsap'
import Viewport from '../utils/Viewport'

let wh = Viewport.wh

const visionKeyframes = {
	section			:	'#vision',
	hook			:	'onEnter',
	scenes: [
		{
			name	:	'titleIn',
			duration:	1800,
			offset	:	0.5 * wh,
			element	: 	'#vision .section__title-xl',
			tween	:	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'titleOut',
			duration:	1800,
			offset	:	3.5 * wh,
			element	: 	'#vision .section__title-xl',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'p1In',
			duration:	1800,
			offset	:	0.75 * wh,
			element	:	'#vision .p1',
			tween	: 	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'p1Out',
			duration:	1800,
			offset	:	3.75 * wh,
			element	:	'#vision .p1',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'p2In',
			duration:	1800,
			offset	:	wh,
			element	:	'#vision .p2',
			tween	: 	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'p2Out',
			duration:	1800,
			offset	:	3.85 * wh,
			element	:	'#vision .p2',
			tween	: 	{y: -wh, ease: Power2.easeIn}
		},
		{
			name	:	'pattern1In',
			duration:	2400,
			offset	:	wh,
			element	:	'#vision .bg-pattern-1',
			tween	: 	{y: 1.5 * wh, x: -500, ease: Power2.easeOut}
		},
		{
			name	:	'pattern1Move',
			duration:	2400,
			offset	:	4.25 * wh,
			element	:	'#vision .bg-pattern-1',
			tween	: 	{y: -1.2 * wh, x: 725, ease: Power2.easeInOut}
		},
		{
			name	:	'pattern1SecondMove',
			duration:	2400,
			offset	:	10.5 * wh,
			element :	'#vision .bg-pattern-1',
			tween	: 	{y: -2.05 * wh, x: 1400, ease: Power2.easeInOut}
		},
		{
			name	:	'pattern1Out',
			duration:	2400,
			offset	:	12 * wh,
			element :	'#vision .bg-pattern-1',
			tween	: 	{y: -2.25 * wh, x: 1500, ease: Power2.easeIn}
		},
		{
			name	:	'img1In',
			duration:	1600,
			offset	:	4.75 * wh,
			element :	'#vision .image-stack__item:nth-child(1)',
			tween	: 	{y: 1.4 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'img2In',
			duration:	1650,
			offset	:	4.75 * wh,
			element :	'#vision .image-stack__item:nth-child(2)',
			tween	: 	{y: 1.5 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'img3In',
			duration:	1700,
			offset	:	4.75 * wh,
			element :	'#vision .image-stack__item:nth-child(3)',
			tween	: 	{y: 1.6 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'img4In',
			duration:	1750,
			offset	:	4.75 * wh,
			element :	'#vision .image-stack__item:nth-child(4)',
			tween	: 	{y: 1.7 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'img5In',
			duration:	1800,
			offset	:	4.75 * wh,
			element :	'#vision .image-stack__item:nth-child(5)',
			tween	: 	{y: 1.8 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'img6In',
			duration:	1850,
			offset	:	4.75 * wh,
			element :	'#vision .image-stack__item:nth-child(6)',
			tween	: 	{y: 1.9 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'img7In',
			duration:	1900,
			offset	:	4.75 * wh,
			element :	'#vision .image-stack__item:nth-child(7)',
			tween	: 	{y: 2.1 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'img1Out',
			duration:	1600,
			offset	:	6.5 * wh,
			element :	'#vision .image-stack__item:nth-child(1)',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'img2Out',
			duration:	1600,
			offset	:	7.1 * wh,
			element :	'#vision .image-stack__item:nth-child(2)',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'img3Out',
			duration:	1600,
			offset	:	7.7 * wh,
			element :	'#vision .image-stack__item:nth-child(3)',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'img4Out',
			duration:	1600,
			offset	:	8.3 * wh,
			element :	'#vision .image-stack__item:nth-child(4)',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'img5Out',
			duration:	1600,
			offset	:	9 * wh,
			element :	'#vision .image-stack__item:nth-child(5)',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'img6Out',
			duration:	1600,
			offset	:	9.5 * wh,
			element :	'#vision .image-stack__item:nth-child(6)',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'img7Out',
			duration:	1600,
			offset	:	10.2 * wh,
			element :	'#vision .image-stack__item:nth-child(7)',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'videoIn',
			duration:	1800,
			offset	:	11 * wh,
			element :	'#vision .video',
			tween	: 	{y: wh, ease: Power2.easeOut}
		},
		{
			name	:	'p3In',
			duration:	1800,
			offset	:	11 * wh,
			element :	'#vision .p3',
			tween	: 	{y: 0.5 * wh, ease: Power2.easeOut}
		},
		{
			name	:	'videoOut',
			duration:	1800,
			offset	:	13 * wh,
			element :	'#vision .video',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		},
		{
			name	:	'p3Out',
			duration:	1400,
			offset	:	13 * wh,
			element :	'#vision .p3',
			tween	: 	{y: -2 * wh, ease: Power2.easeIn}
		}
	]
}

export default visionKeyframes
