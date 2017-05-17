import $ from 'jquery'
import Page from '../modules/Page'
import Viewport from '../utils/Viewport'

export default class News extends Page {
	constructor() {
		super()

		this.prevScrollPos = 0

		if (Viewport.ww < 1024) {
			setInterval( () => {
				let scrollPos = $(window).scrollTop(),
					scrollDirection

				if (this.prevScrollPos < scrollPos) {
					scrollDirection = 'FORWARD'
				}
				else if (this.prevScrollPos > scrollPos) {
					scrollDirection = 'REVERSE'
				}

				this.prevScrollPos = scrollPos

				// console.log('scrollPos: ' + info.scrollPos + ', viewport: ' + Viewport.wh * 1.5 + ', bottom: ' + bottomBound)

				if (scrollDirection === 'FORWARD' && scrollPos > Viewport.wh / 2) {
					this.$navToggle.addClass('out')
					$('.logo').addClass('out')
				}
				else if (scrollDirection === 'REVERSE') {
					this.$navToggle.removeClass('out')
					$('.logo').removeClass('out')
				}
			}, 100)
		}
	}
	// Private
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––


	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––


}
