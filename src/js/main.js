import $ from 'jquery'
import Front from './pages/Front'
import News from './pages/News'

class App {
	constructor() {
		this.page = null;
		this._initPage()
		this._initEvents()
	}

	// Private
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_initPage() {
		if ( $('body').hasClass('front') ) {
			this.page = new Front()
		}
		else {
			this.page = new News()
		}
	}

	_initEvents() {
		$(window).on('keydown', this._onGridShortcut)
		$(window).on('resize', this._onResize.bind(this))
	}

	// Handlers
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

	_onGridShortcut(e) {
		if (e.ctrlKey && e.which === 71)
			$('.grid').toggleClass('show')
	}

	_onResize(e) {
		console.log('calling onResize in App')
		this.page.resize()
	}
}

// on document ready
$( () => {
	let MP = new App()
})
