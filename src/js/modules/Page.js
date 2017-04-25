import $ from 'jquery'
import { TimelineMax } from 'gsap'
import getRandomInt from '../utils/getRandomInt'


class Page {

	constructor() {
		this._initElements()
		this._initNavTransition()
		this._initEvents()
	}

	// Private
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_initElements() {
		this.$nav = $('.nav')
		this.$navItems = $('.nav__item')
		this.$navToggle = $('.nav-toggle')
		this.$navClose = $('.nav-close')
	}

	_initNavTransition() {
		let _self = this
		this.navTimeline = new TimelineMax()

		this.navTimeline.to(this.$nav, 0.25, {
			opacity: 1,
			ease: Linear.easeNone
		})

		this.$navItems.each(function(index, element){
			let t, x, y, r

			t = 0.1 * getRandomInt(1,9) + 0.75

			r = getRandomInt(180, 360)

			if (index <= 3) { y = '-100%' }
			else { y = '-200%' }

			if (index % 4 === 0) { x = '400%' }
			else if (index % 4 === 1) { x = '300%' }
			else if (index % 4 === 2) { x = '200%' }
			else { x = '100%' }

			_self.navTimeline.from(element, t, {
				x: x,
				y: y,
				rotation: r,
				ease: Elastic.easeOut.config(1, 0.85)
			}, 0)
		})
	}

	_initEvents() {
		$navToggle.on('click', this._onNavToggleClick)
		$navClose.on('click', this._onNavCloseClick)
	}

	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_onNavToggleClick(e) {
		e.preventDefault()
		this.$nav.css('z-index', '99999')
		this.navTimeline.timeScale = 1
		this.navTimeline.restart()
	}

	_onNavCloseClick(e) {
		e.preventDefault()
		this.navTimeline.timeScale = 8
		this.navTimeline.reverse()
		setTimeout(function(){
			this.$nav.css('z-index', '-10')
		}, 2000)
	}

	// Public
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	// Getters
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	// Setters
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
}

export default Page;
