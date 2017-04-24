import $ from 'jquery'
import Page from 'modules/Page'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'jquery-color'
import 'slick-carousel'
import heroKeyframes from 'keyframes/hero'
import missionKeyframes from 'keyframes/mission'
import siteKeyframes from 'keyframes/site'
import visionKeyframes from 'keyframes/vision'
import timelineKeyframes from 'keyframes/timeline'
import principlesKeyframes from 'keyframes/principles'
import signupKeyframes from 'keyframes/signup'
import newsKeyframes from 'keyframes/news'
import teamKeyframes from 'keyframes/team'

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
		let self = this
		this.$sections = $('section').push($('#footer')[0])
		this.$titles = $('section .title')

		this.$section.map( (item, index) => {
			new ScrollMagic.Scene({
				triggerElement: item,
				duration: $(item).outerHeight()
			})
			.addTo(::this.scrollCtrl)
			.on('enter leave', (e) => {
				if (e.type === 'enter') {
					const $el = $(this.triggerElement())
					::this.current = $el.attr('id')
					$('.current').removeClass('current')
					$el.addClass('current')
					console.log('CURRENT: ' + ::this.current)
				}
			})
			// .addIndicators({ name: item.attr('id')})

			if (item.attr('id') != 'hero') {
				new ScrollMagic.Scene({
					triggerElement: item,
					duration: '50%'
				})
				.addTo(::this.scrollCtrl)
				.on('progress', (e) => {
					if (e.progress > 0) {
						const $el = $(this.triggerElement())
						let prevColor = $el.prev().attr('data-bg-color')
						let nextColor = $el.attr('data-bg-color')
						let color = $.Color(prevColor).transition(nextColor, e.progress.toFixed(3))

						$('section').css('background-color', color)
						::this.$nav.css('background-color', color)
					}
				})
				// .addIndicators({ name: item.attr('id')})
			}
		})

		this.$titles.map( (item, index) => {
			let $title = $(item)
			let offset = $title.width() / 2
			let duration = $title.parent().outerHeight() - ($title.width() + 192)
			new ScrollMagic.Scene({
				triggerElement: item,
				duration,
				offset
			})
			.addTo(scrollCtrl),
			.setPin(item)
		})
	}

	_initScrollScenes() {
		let wh = $window.height()
		const combinedKeyframes = [
			heroKeyframes,
			missionKeyframes,
			siteKeyframes,
			visionKeyframes,
			timelineKeyframes,
			principlesKeyframes,
			signupKeyframes,
			newsKeyframes,
			teamKeyframes
		]
		combinedKeyframes.map( (section, index) => {
			section.scenes.map( (scene, index) => {
				new ScrollMagic.Scene({
					triggerElement: section.section,
					triggerHook: section.hook,
					duration: scene.duration,
					offset: scene.offset
				})
				.setTween(scene.tween)
				.addTo(::this.scrollCtrl)
				// .addIndicators({name: scene.name})
			})
		})
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
		$('body').on('click', '.arrow-down', this._onArrowDownClick(e))
	}

	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_onArrowDownClick(e) {
		e.preventDefault()
		// scroll to target
	}
}
