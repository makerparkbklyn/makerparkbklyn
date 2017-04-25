import $ from 'jquery'
import 'jquery-color'
import 'slick-carousel'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

import Page from '../modules/Page'

import heroKeyframes from '../keyframes/hero'
import missionKeyframes from '../keyframes/mission'
import siteKeyframes from '../keyframes/site'
import visionKeyframes from '../keyframes/vision'
import timelineKeyframes from '../keyframes/timeline'
// import principlesKeyframes from '../keyframes/principles'
// import signupKeyframes from '../keyframes/signup'
// import newsKeyframes from '../keyframes/news'
// import teamKeyframes from '../keyframes/team'

import Viewport from '../utils/Viewport'

export default class Front extends Page {
	constructor() {
		super()

		this.current = 'hero'
		this.sectionCtrl = new ScrollMagic.Controller()
		this.scrollCtrl = new ScrollMagic.Controller()

		this._initSections()
		this._initScrollScenes()
		// this._initTimelineCarousel()

	}
	// Private
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_initSections() {
		let _self = this
		_self.$sections = $('section')
		_self.$sections.push($('#footer')[0])
		_self.$titles = $('section .title')

		_self.$sections.map( (index, section) => {
			let $el = $(section)
			new ScrollMagic.Scene({
				triggerElement: section,
				duration: $el.outerHeight()
			})
			.addTo(_self.sectionCtrl)
			.on('enter leave', (e) => {
				if (e.type === 'enter') {
					_self.current = $el.attr('id')
					$('.current').removeClass('current')
					$el.addClass('current')
					console.log('CURRENT: ' + _self.current)
				}
			})
			// .addIndicators({ name: item.attr('id')})

			if ($el.attr('id') != 'hero') {
				new ScrollMagic.Scene({
					triggerElement: section,
					duration: '50%'
				})
				.addTo(_self.sectionCtrl)
				.on('progress', (e) => {
					if (e.progress > 0) {
						let prevColor = $el.prev().attr('data-bg-color')
						let nextColor = $el.attr('data-bg-color')
						let color = $.Color(prevColor).transition(nextColor, e.progress.toFixed(3))

						$('section').css('background-color', color)
						_self.$nav.css('background-color', color)
					}
				})
				// .addIndicators({ name: item.attr('id')})
			}
		})

		this.$titles.map( (index, item) => {
			let $title = $(item)
			let offset = $title.width() / 2
			let duration = $title.parent().outerHeight() - ($title.width() + 192)
			new ScrollMagic.Scene({
				triggerElement: item,
				duration,
				offset
			})
			.addTo(_self.sectionCtrl)
			.setPin(item)
		})
	}

	_initScrollScenes() {
		let _self	= this,
			rIn		= /In$/,
			rOut	= /Out$/,
			rThru	= /Thru$/,
			rMove 	= /Move$/
		const combinedKeyframes = [
			heroKeyframes,
			missionKeyframes,
			siteKeyframes,
			visionKeyframes,
			timelineKeyframes,
			// principlesKeyframes,
			// signupKeyframes,
			// newsKeyframes,
			// teamKeyframes
		]
		combinedKeyframes.map( (section, i) => {
			section.scenes.map( (scene, j) => {
				let tween = null

				if ( rIn.test(scene.name) ) {
					tween = TweenMax.from(`${section.section} ${scene.element}`, 1, scene.tween)
				}
				else if ( rOut.test(scene.name) || rMove.test(scene.name) ) {
					tween = TweenMax.to(`${section.section} ${scene.element}`, 1, scene.tween)
				}
				else if ( rThru.test(scene.name) ) {
					tween = TweenMax.fromTo(`${section.section} ${scene.element}`, 1, scene.tween[0], scene.tween[1])
				}
				else {
					console.error(`Invalid tween type from scene ${scene.name} in ${section.section} section`);
				}

				new ScrollMagic.Scene({
					triggerElement: section.section,
					triggerHook: section.hook,
					duration: scene.duration,
					offset: scene.offset
				})
				.setTween(tween)
				.addTo(this.scrollCtrl)
				// .addIndicators({name: scene.name})
			})
		})
	}

	// _initTimelineCarousel() {
	// 	if ( $('.timeline-carousel').length ) {
	// 		$('.timeline-carousel').slick({
	// 			infinite: true,
	// 			speed: 500,
	// 			arrows: true,
	// 			dots: true,
	// 			pauseOnHover: false,
	// 			prevArrow: $('.timeline-arrow--prev'),
	// 			nextArrow: $('.timeline-arrow--next'),
	// 		})
	// 	}
	// 	else {
	// 		console.warn('no timeline carousel to initiate')
	// 	}
	// }

	_initEvents() {
		$('body').on('click', '.arrow-down', this._onArrowDownClick)
	}

	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_onArrowDownClick(e) {
		e.preventDefault()
		console.log('arrow down clicked')
		// scroll to target
	}
}
