import Viewport from '../utils/Viewport'

const visionKeyframes = () => {
	Viewport.update()

	let wh = Viewport.wh
	let ww = Viewport.ww

	return {
		section			:	'#vision',
		hook			:	'onEnter',
		scenes: [
			{
				name	: 	'05Slide',
				duration: 	0,
				offset	: 	1.16 * wh,
				index 	:	5,
				hook	: 	'onLeave'
			},
			{
				name	: 	'06Slide',
				duration: 	0,
				offset	: 	4.65 * wh,
				index 	:	6,
				hook	: 	'onLeave'
			},
			{
				name	: 	'07Slide',
				duration: 	0,
				offset	: 	11 * wh,
				index 	:	7,
				hook	: 	'onLeave'
			},
			{
				name	:	'spinningTankThru',
				duration:	2.5 * wh,
				offset	:	-0.75 * wh,
				element	:	'#vision .spinning-tank',
				tween	: 	[
								{y: 0.5 * wh, x: -0.25 * ww, rotation: -360,},
								{y: -0.25 * wh, x: ww * 1.25, rotation: 180, ease: Linear.easeNone}
							]
			},
			{
				name	:	'titleIn',
				duration:	1.4 * wh,
				offset	:	0 * wh,
				element	: 	'#vision .section__title-xl',
				tween	:	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'titleOut',
				duration:	1.4 * wh,
				offset	:	3 * wh,
				element	: 	'#vision .section__title-xl',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p1In',
				duration:	1.4 * wh,
				offset	:	0.25 * wh,
				element	:	'#vision .p1',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p1Out',
				duration:	1.4 * wh,
				offset	:	3.25 * wh,
				element	:	'#vision .p1',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p2In',
				duration:	1.4 * wh,
				offset	:	0.5 * wh,
				element	:	'#vision .p2',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p2Out',
				duration:	1.4 * wh,
				offset	:	3.35 * wh,
				element	:	'#vision .p2',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern1In',
				duration:	1.8 * wh,
				offset	:	0.5 * wh,
				element	:	'#vision .bg-pattern-1',
				tween	: 	{y: 1.5 * wh, x: -0.25 * ww, ease: Power2.easeOut}
			},
			{
				name	:	'pattern1Move',
				duration:	1.4 * wh,
				offset	:	3.75 * wh,
				element	:	'#vision .bg-pattern-1',
				tween	: 	{y: -1.2 * wh, x: 0.25 * ww, ease: Power2.easeInOut}
			},
			{
				name	:	'img1In',
				duration:	1.2 * wh,
				offset	:	4.25 * wh,
				element :	'#vision .image-stack__item:nth-child(1)',
				tween	: 	{y: 1.4 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'img2In',
				duration:	1.25 * wh,
				offset	:	4.25 * wh,
				element :	'#vision .image-stack__item:nth-child(2)',
				tween	: 	{y: 1.5 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'img3In',
				duration:	1.3 * wh,
				offset	:	4.25 * wh,
				element :	'#vision .image-stack__item:nth-child(3)',
				tween	: 	{y: 1.6 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'img4In',
				duration:	1.35 * wh,
				offset	:	4.25 * wh,
				element :	'#vision .image-stack__item:nth-child(4)',
				tween	: 	{y: 1.7 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'img5In',
				duration:	1.4 * wh,
				offset	:	4.25 * wh,
				element :	'#vision .image-stack__item:nth-child(5)',
				tween	: 	{y: 1.8 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'img6In',
				duration:	1.425 * wh,
				offset	:	4.25 * wh,
				element :	'#vision .image-stack__item:nth-child(6)',
				tween	: 	{y: 1.9 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'img7In',
				duration:	1.45 * wh,
				offset	:	4.25 * wh,
				element :	'#vision .image-stack__item:nth-child(7)',
				tween	: 	{y: 2.1 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'img1Out',
				duration:	1.2 * wh,
				offset	:	6 * wh,
				element :	'#vision .image-stack__item:nth-child(1)',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'img2Out',
				duration:	1.2 * wh,
				offset	:	6.6 * wh,
				element :	'#vision .image-stack__item:nth-child(2)',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'img3Out',
				duration:	1.2 * wh,
				offset	:	7.2 * wh,
				element :	'#vision .image-stack__item:nth-child(3)',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'img4Out',
				duration:	1.2 * wh,
				offset	:	7.8 * wh,
				element :	'#vision .image-stack__item:nth-child(4)',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'img5Out',
				duration:	1.2 * wh,
				offset	:	8.5 * wh,
				element :	'#vision .image-stack__item:nth-child(5)',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'img6Out',
				duration:	1.2 * wh,
				offset	:	9 * wh,
				element :	'#vision .image-stack__item:nth-child(6)',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'img7Out',
				duration:	1.2 * wh,
				offset	:	9.7 * wh,
				element :	'#vision .image-stack__item:nth-child(7)',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'videoIn',
				duration:	1.4 * wh,
				offset	:	10.5 * wh,
				element :	'#vision .video',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p3In',
				duration:	1.4 * wh,
				offset	:	10.5 * wh,
				element :	'#vision .p3',
				tween	: 	{y: 0.75 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'pattern1SecondMove',
				duration:	1.4 * wh,
				offset	:	10.2 * wh,
				element :	'#vision .bg-pattern-1',
				tween	: 	{y: -1.9 * wh, x: 0.65 * ww, ease: Power2.easeInOut}
			},
			{
				name	:	'pattern1Out',
				duration:	1 * wh,
				offset	:	12.5 * wh,
				element :	'#vision .bg-pattern-1',
				tween	: 	{y: -2.25 * wh, x: 0.8 * ww, ease: Power2.easeIn}
			},
			{
				name	:	'videoOut',
				duration:	1.4 * wh,
				offset	:	12.5 * wh,
				element :	'#vision .video',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'p3Out',
				duration:	wh,
				offset	:	12.5 * wh,
				element :	'#vision .p3',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			}
		]
	}
}

export default visionKeyframes
