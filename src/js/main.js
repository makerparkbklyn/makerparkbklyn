import $ from 'jquery'
import Front from 'pages/Front'
import News from 'pages/News'



// on document ready
$( () => {

	// DEV: Show / Hide Grid
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––
	$(window).on('keydown', function (e) {
		if (e.which === 71) { $('.grid').toggleClass('show'); }
	});

	// Nav Toggles
	//–––––––––––––––––––––––––––————————————————————————————–––––––––––––––––––

})
