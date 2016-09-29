$(document).on('ready', function() {

	$('body').on("click", '.nav__toggle', function (e) {
		e.preventDefault();
		$('.nav').toggleClass('open');
	});

	// TODO - add class to active nav__item

	//animate smooth scroll to links w/in page
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  headerHeight = 150;
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top - headerHeight
		  }, 1000);
			return false;
		   }
		  }
		});
	  });

	  // animate smooth scroll to next section on arrow click
	//   $('body').on('click', '.arrow', function() {
	// 	  e.preventDefault();
	  //
	// 		  var $next = $('.current').next('.section');
	// 		  console.log($next);
	// 		  var top = $next.offset().top;
	  //
	// 		  $('.current').removeClass('current');
	  //
	// 		  headerHeight = 150;
	// 		  $('body').animate({
	// 			  scrollTop: top
	// 		  }, function () {
	// 			  $next.addClass('current');
	// 		  });
	// 	  }

});


// $(window).scroll(function(e){
//   var $el = $('.fixedElement');
//   var isPositionFixed = ($el.css('position') == 'fixed');
//   if ($(this).scrollTop() > 200 && !isPositionFixed){
//     $('.fixedElement').css({'position': 'fixed', 'top': '0px'});
//   }
//   if ($(this).scrollTop() < 200 && isPositionFixed)
//   {
//     $('.fixedElement').css({'position': 'static', 'top': '0px'});
//   }
// });
