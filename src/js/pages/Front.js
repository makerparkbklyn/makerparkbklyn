import $ from 'jquery'
import 'jquery-color'
import 'slick-carousel'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

import Page from '../modules/Page'
import GoogleMap from '../modules/Map'
import submitForm from '../modules/SignupForm'

import leftRailKeyframes from '../keyframes/rails'
import heroKeyframes from '../keyframes/hero'
import missionKeyframes from '../keyframes/mission'
import siteKeyframes from '../keyframes/site'
import visionKeyframes from '../keyframes/vision'
import timelineKeyframes from '../keyframes/timeline'
import principlesKeyframes from '../keyframes/principles'
import signupKeyframes from '../keyframes/signup'
import newsKeyframes from '../keyframes/news'
import teamKeyframes from '../keyframes/team'
import footerKeyframes from '../keyframes/footer'

import Viewport from '../utils/Viewport'
import setupScrollMagicScenes from '../utils/setupScrollMagicScenes'

export default class Front extends Page {
	constructor() {
		super()

		// this.current = 'hero'
		this.sectionCtrl = null
		this.scrollCtrl = null

		this._initSections()
		this._initScrollScenes()
		this._initCarousels()
		this._initMap()
		this._initEvents()
		this._finishInit()

	}
	// Private
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_initSections() {
		this.sectionCtrl = new ScrollMagic.Controller()
		let _self = this
		_self.$sections = $('section')
		// _self.$sections.push($('#footer')[0])
		_self.$titles = $('.section__title')

		// track current section
		_self.$sections.map( (index, section) => {
			let $el = $(section)

			// update background color
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
						// $('body').css('background-color', color)
					}
				})
				// .addIndicators({ name: item.attr('id')})
			}
		})

		// animate sidebar titles
		if ( Viewport.ww >= 1024 ) {
			this.$titles.map( (index, item) => {
				let $title = $(item)
				let offset = 0
				let duration = ($title.parent().outerHeight()) - (Viewport.wh)
				new ScrollMagic.Scene({
					triggerElement: item,
					duration,
					offset
				})
				.addTo(_self.sectionCtrl)
				.setPin(item)
				// .addIndicators({ name: $title.parent().attr('id') })
			})
		}

		this.sectionCtrl.scrollTo((newScrollPos) => {
			console.log('in scrollto')
			$('body').animate({scrollTop: newScrollPos}, 1500)
		})

		if (Viewport.ww < 1024) {
			setInterval( () => {
				let info = _self.sectionCtrl.info(),
					bottomBound = $('footer').offset().top - (Viewport.wh * 1.5)

				// console.log('scrollPos: ' + info.scrollPos + ', viewport: ' + Viewport.wh * 1.5 + ', bottom: ' + bottomBound)

				if (info.scrollDirection === 'FORWARD' && info.scrollPos > (Viewport.wh * 1.5) && info.scrollPos < bottomBound) {
					_self.$navToggle.addClass('out')
					$('.hero-logo').addClass('out')
				}
				else if (info.scrollDirection === 'REVERSE' || info.scrollPos < (Viewport.wh * 1.5) || info.scrollPos > bottomBound) {
					_self.$navToggle.removeClass('out')
					$('.hero-logo').removeClass('out')
				}
			}, 100)
		}
	}

	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	// TODO: create _assembleKeyframes function?
	_initScrollScenes() {
		this.scrollCtrl = new ScrollMagic.Controller()

		let combinedKeyframes = []

		if (Viewport.ww < 1024) {
			combinedKeyframes = [
				heroKeyframes,
				leftRailKeyframes
			]
		}
		else {
			combinedKeyframes = [
				heroKeyframes,
				missionKeyframes,
				siteKeyframes,
				visionKeyframes,
				timelineKeyframes,
				principlesKeyframes,
				signupKeyframes,
				newsKeyframes,
				teamKeyframes,
				footerKeyframes
			]
		}

		setupScrollMagicScenes(combinedKeyframes, this.scrollCtrl, false)
	}

	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_initMap() {
		GoogleMap( $('#map') )
	}

	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_initCarousels() {
		const $timeline = $('.timeline-carousel')
		const $renderings = $('#vision .renderings')

		if ( $timeline.length ) {
			$timeline.slick({
				infinite: true,
				dots: true,
				focusOnSelect: false,
				adaptiveHeight: true,
				prevArrow: $('.timeline-arrow--prev'),
				nextArrow: $('.timeline-arrow--next'),
			})
		}
		else {
			console.warn('no timeline carousel to initiate')
		}

		if ( $renderings.length && Viewport.ww < 1024 ) {
			$renderings.slick({
				infinite: true,
				dots: true,
				focusOnSelect: false,
				adaptiveHeight: true,
				prevArrow: $('.renderings-arrow--prev'),
				nextArrow: $('.renderings-arrow--next'),
			})
		}
		else {
			console.warn('no renderings carousel to initiate')
		}
	}

	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_initEvents() {
		super._initEvents()

		$('body').on('click', '.arrow-down', this._onArrowDownClick)

		$('.embed-container').on('click', (e) => {
			let $video = $(e.target)
			$video.html($video.attr('data-video-iframe'))
		})

		$('.nav__item').on('click', 'a', this._onNavItemClick.bind(this))

		$('.signup-sticker').on('click', this._onNavItemClick.bind(this))

		$('#signup').submit(submitForm)
	}

	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_finishInit() {
		// $('.unloaded').removeClass('unloaded')
		TweenMax.to('.loader', 1, {opacity: 0})
		setTimeout( () => {
			$('.loader').css('z-index', '-10')
		}, 1800)
	}

	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_refreshScrollScenes() {
		// this is resetting scenes back to 'from' value
		this.scrollCtrl = this.scrollCtrl.destroy(true)
		// this.scrollCtrl = new ScrollMagic.Controller()
		// console.log('AFTER REFRESH KEYFRAMES')
		this._initScrollScenes()
	}

	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_onArrowDownClick(e) {
		e.preventDefault()
		console.log('arrow down clicked')
		// scroll to target
	}

	_onNavItemClick(e) {
		e.preventDefault()
		this.$nav.css('z-index', '-10')
		this.$navClose.click()

		Viewport.update()

		let $target = $($(e.currentTarget).attr('data-scrollto'))
		let position = null

		if (Viewport.ww < 1024) {
			position = $target.offset().top
		}
		else {
			switch ($target.attr('id')) {
				case 'mission':
					position = $target.offset().top + Viewport.wh * 2
					break
				case 'site':
					position = $target.offset().top + Viewport.wh * 2.25
					break
				case 'vision':
					position = $target.offset().top + Viewport.wh * 2.25
					break
				case 'timeline':
					position = $target.offset().top + Viewport.wh * 1.5
					break
				case 'principles':
					position = $target.offset().top + Viewport.wh * 1.5
					break
				case 'signup':
					position = $target.offset().top + Viewport.wh * 1.25
					break
				case 'news':
					position = $target.offset().top + Viewport.wh
					break
				case 'team':
					position = $target.offset().top + Viewport.wh * 0.9
					break
				default:
					position = $target.offset().top
					break
			}
		}

		this.sectionCtrl.scrollTo(position)
	}

	// Public
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	resize() {
		let oldWidth = Viewport.ww,
			oldHeight = Viewport.wh,
			diff

		Viewport.update()

		if (oldWidth != Viewport.ww) {
			location.reload()
			// this is causing the repositioning problems
			// return to this later
			// this._refreshScrollScenes()
		}
		else if (Viewport.ww < 1024) {
			diff = oldHeight - Viewport.wh

			if (diff < 0) {
				diff = diff * -1
			}
			if (diff > 120) {
				location.reload()
			}
		}
		else {
			location.reload()
		}
	}
}
