import { TweenMax } from 'gsap'
import Viewport from '../utils/Viewport'

const siteKeyframes = () => {

	Viewport.update()

	let wh = Viewport.wh

	return {
		section			:	'#site',
		hook			:	'onEnter',
		scenes: [
			{
				name	:	'titleIn',
				duration:	1800,
				offset	:	0.25 * wh,
				element	:	'#site .section__title-xl',
				tween	:	{y: wh * 1.2, ease: Power2.easeOut}
			},
			{
				name	:	'titleOut',
				duration:	1800,
				offset	:	9.75 * wh,
				element	:	'#site .section__title-xl',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p1In',
				duration:	1800,
				offset	:	0.65 * wh,
				element	:	'#site .p1',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p1Out',
				duration:	1800,
				offset	:	10 * wh,
				element	:	'#site .p1',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p2In',
				duration:	1800,
				offset	:	0.85 * wh,
				element	:	'#site .p2',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p2Out',
				duration:	1800,
				offset	:	10.25 * wh,
				element	:	'#site .p2',
				tween	: 	{y: -wh, ease: Power2.easeIn}
			},
			{
				name	:	'p3In',
				duration:	1800,
				offset	:	wh,
				element	:	'#site .p3',
				tween	: 	{y: wh, ease: Power2.easeOut}
			},
			{
				name	:	'p3Out',
				duration:	1800,
				offset	:	10.25 * wh,
				element	:	'#site .p3',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern1In',
				duration:	2400,
				offset	:	0.75 * wh,
				element	:	'#site .bg-pattern-1',
				tween	: 	{y: 1.5 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'pattern1Out',
				duration:	2400,
				offset	:	10.25 * wh,
				element	:	'#site .bg-pattern-1',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'pattern2In',
				duration:	2400,
				offset	:	wh,
				element	:	'#site .bg-pattern-2',
				tween	: 	{y: 1.5 * wh, ease: Power2.easeOut}
			},
			{
				name	:	'pattern2Out',
				duration:	2400,
				offset	:	10.5 * wh,
				element	:	'#site .bg-pattern-2',
				tween	: 	{y: -2 * wh, ease: Power2.easeIn}
			},
			{
				name	:	'image00Thru',
				duration:	2700,
				offset	:	3.25 * wh,
				element	:	'#site .image-00',
				tween	: 	[
								{y: 2 * wh},
								{y: -0.25 * wh,ease: Linear.easeNone}
							]
			},
			{
				name	:	'image01Thru',
				duration:	4000,
				offset	:	4 * wh,
				element	:	'#site .image-01',
				tween	: 	[
								{y: 2.5 * wh},
								{y: -0.25 * wh, ease: Linear.easeNone}
							]
			},
			{
				name	:	'image02Thru',
				duration:	4200,
				offset	:	5.25 * wh,
				element	:	'#site .image-02',
				tween	: 	[
								{y: 2 * wh},
								{y: 0, ease: Linear.easeNone}
							]
			},
			{
				name	:	'image03Thru',
				duration:	4200,
				offset	:	6 * wh,
				element	:	'#site .image-03',
				tween	: 	[
								{y: 2 * wh},
								{y: 0, ease: Linear.easeNone}
							]
			},
			{
				name	:	'image04Thru',
				duration:	6000,
				offset	:	6.25 * wh,
				element	:	'#site .image-04',
				tween	: 	[
								{y: 2 * wh},
								{y: 0, ease: Linear.easeNone}
							]
			},
			{
				name	:	'image05Thru',
				duration:	3000,
				offset	:	6.5 * wh,
				element	:	'#site .image-05',
				tween	: 	[
								{y: 2 * wh},
								{y: 0, ease: Linear.easeNone}
							]
			},
			{
				name	:	'mapIn',
				duration:	1800,
				offset	:	10.75 * wh,
				element	:	'#site .map',
				tween	: 	{y: 1.5 * wh, x: -800, ease: Power2.easeOut}
			},
			{
				name	:	'mapOut',
				duration:	1800,
				offset	:	13.25 * wh,
				element	:	'#site .map',
				tween	: 	{y: -2 * wh, x: 800, ease: Power2.easeIn}
			},
		]
	}
}

export default siteKeyframes
