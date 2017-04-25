import $ from 'jquery'
import 'jquery-color'
import Page from '../modules/Page'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'slick-carousel'
import heroKeyframes from '../keyframes/hero'
import missionKeyframes from '../keyframes/mission'
import siteKeyframes from '../keyframes/site'
import visionKeyframes from '../keyframes/vision'
import timelineKeyframes from '../keyframes/timeline'
import principlesKeyframes from '../keyframes/principles'
import signupKeyframes from '../keyframes/signup'
import newsKeyframes from '../keyframes/news'
import teamKeyframes from '../keyframes/team'
import Viewport from '../utils/Viewport'

export default class Front extends Page {
	constructor() {
		super()

		this.current = 'hero'
		this.scrollCtrl = new ScrollMagic.Controller()

		this._initSections()
		this._initScrollScenes()
		this._initTimelineCarousel()

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
			.addTo(_self.scrollCtrl)
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
				.addTo(_self.scrollCtrl)
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
			.addTo(_self.scrollCtrl)
			.setPin(item)
		})
	}

	_initScrollScenes() {
		let _self = this
		const combinedKeyframes = [
			heroKeyframes,
			missionKeyframes,
			// siteKeyframes,
			// visionKeyframes,
			// timelineKeyframes,
			// principlesKeyframes,
			// signupKeyframes,
			// newsKeyframes,
			// teamKeyframes
		]
		console.log(combinedKeyframes);
		combinedKeyframes.map( (section, i) => {
			section.scenes.map( (scene, j) => {
				new ScrollMagic.Scene({
					triggerElement: section.section,
					triggerHook: section.hook,
					duration: scene.duration,
					offset: scene.offset
				})
				.setTween(scene.tween)
				.addTo(this.scrollCtrl)
				.addIndicators({name: scene.name})
			})
		})
		// for (var i = 0; i < combinedKeyframes.length; i++) {
		// 	var p = combinedKeyframes[i];
		// 	var trigger = p.section;
		// 	var hook = p.hook;
		// 	for (var j = 0; j < p.scenes.length; j++) {
		// 		var scene = p.scenes[j];
		// 		var s = new ScrollMagic.Scene({
		// 			triggerElement: trigger,
		// 			triggerHook: hook,
		// 			duration: scene.duration,
		// 			offset: scene.offset
		// 		});
		// 		s.setTween(scene.tween);
		// 		s.addIndicators({name: scene.name});
		// 		s.addTo(_self.scrollCtrl);
		// 	}
		// }
	}

	_initTimelineCarousel() {
		$('#timeline .timeline-carousel').slick({
			infinite: true,
			speed: 500,
			arrows: true,
			dots: true,
			pauseOnHover: false,
			prevArrow: $('.timeline-arrow--prev'),
			nextArrow: $('.timeline-arrow--next'),
		})
	}

	_initEvents() {
		$('body').on('click', '.arrow-down', this._onArrowDownClick)
	}

	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_onArrowDownClick(e) {
		e.preventDefault()
		// scroll to target
	}
}
