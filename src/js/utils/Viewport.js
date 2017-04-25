import $ from 'jquery'

class Viewport {
	constructor() {
		this.$window = $(window)
		this.$body = $('body')

		this.ww = this.$window.width()
		this.wh = this.$window.height()
		this.sw = screen.width
		this.sh = screen.height

		this._onResize()
		this._initEvents()
	}

	_initEvents() {
		this.$window.on('resize', this._onResize())
	}

	_onResize() {
		this.ww = this.$window.width()
		this.wh = this.$window.height()
		this.sw = screen.width
		this.sh = screen.height
	}
}

export default new Viewport()
