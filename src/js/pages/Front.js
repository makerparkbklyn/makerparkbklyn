import $ from 'jquery'
import 'jquery-color'
import 'slick-carousel'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

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
import {slideStops, calcStop} from '../utils/slideStops'

export default class Front extends Page {
	constructor() {
		super()

		// this.current = 'hero'
		this.sectionCtrl = null
		this.scrollCtrl = null
		this.currentSlide = 0
		this.scrolling = false

		this._initSections()
		this._initScrollScenes()
		this._initCarousels()
		this._initMap()
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
						let color = $.Color(prevColor).transition(
							nextColor,
							e.progress.toFixed(3)
						)

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
			// console.log('in scrollTo this: ' + this.scrolling)
			this.scrolling = true
			// console.log('in scrollTo this: ' + this.scrolling)
			TweenMax.to($(window), 1.5, { scrollTo: { y: newScrollPos }, onComplete: () => {
				// console.log('finished animating!!!!')
				this.scrolling = false
			} } )
		})

		if (Viewport.ww < 1024) {
			setInterval( () => {
				let info = _self.sectionCtrl.info(),
					bottomBound = $('footer').offset().top - (Viewport.wh * 1.5)

				if (info.scrollDirection === 'FORWARD' &&
				info.scrollPos > (Viewport.wh * 1.5) &&
				info.scrollPos < bottomBound) {
					_self.$navToggle.addClass('out')
					$('.hero-logo').addClass('out')
				}
				else if (info.scrollDirection === 'REVERSE' ||
				info.scrollPos < (Viewport.wh * 1.5) ||
				info.scrollPos > bottomBound) {
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

		setupScrollMagicScenes(combinedKeyframes, this.scrollCtrl, this)
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

		$('.arrow-down').on('click', 'a', this._onArrowDownClick.bind(this))

		$('.embed-container').on('click', (e) => {
			let $video = $(e.target)
			$video.html($video.attr('data-video-iframe'))
		})

		$('.nav__item').on('click', 'a', this._onNavItemClick.bind(this))

		$('.signup-sticker').on('click', 'a', this._onNavItemClick.bind(this))

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

	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_updateCurrentSlide(newSlideIndex, arrowClicked = false) {
		console.log('in _updateCurrentSlide')
		if (newSlideIndex < 0) { newSlideIndex = 0 }
		console.log('newSlideIndex:' + newSlideIndex)
		if (newSlideIndex === 14 && this.currentSlide === 14 && arrowClicked) {
			this.sectionCtrl.scrollTo( 0 )
			this.currentSlide = 0
			$('.arrow-down').removeClass('flipped')
		}
		else {
			// update currentSlide
			this.currentSlide = newSlideIndex
			// if arrow clicked, scroll to slide
			if (arrowClicked) {
				this.sectionCtrl.scrollTo( calcStop( slideStops[this.currentSlide] ) )
			}
			// if entering footer
			if (this.currentSlide === 14) {
				$('.arrow-down').addClass('flipped')
			}
			else {
				$('.arrow-down').removeClass('flipped')
			}
		}
	}

	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	_onArrowDownClick(e) {
		e.preventDefault()
		console.log('arrow down clicked')
		let newSlideIndex = this.currentSlide + 1 <= 14 ? this.currentSlide + 1 : 14
		this._updateCurrentSlide(newSlideIndex, true)
	}

	_onNavItemClick(e) {
		e.preventDefault()
		console.log('nav item clicked')
		this.$nav.css('z-index', '-10')
		this.$navClose.click()

		Viewport.update()

		let $target = $( $(e.currentTarget).attr('data-scrollto') )
		let position = null

		if (Viewport.ww < 1024) {
			position = $target.offset().top
		}
		else {
			switch ($target.attr('id')) {
				case 'mission':
					position = calcStop( slideStops[1] )
					this.currentSlide = 1
					break
				case 'site':
					position = calcStop( slideStops[3] )
					this.currentSlide = 3
					break
				case 'vision':
					position = calcStop( slideStops[5] )
					this.currentSlide = 5
					break
				case 'timeline':
					position = calcStop( slideStops[8] )
					this.currentSlide = 8
					break
				case 'principles':
					position = calcStop( slideStops[9] )
					this.currentSlide = 9
					break
				case 'signup':
					position = calcStop( slideStops[10] )
					this.currentSlide = 10
					break
				case 'news':
					position = calcStop( slideStops[11] )
					this.currentSlide = 11
					break
				case 'team':
					position = calcStop( slideStops[12] )
					this.currentSlide = 12
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
