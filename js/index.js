$(function() {

	$('.slideshow').slick({
		autoplay: true,
		});

	$('.variable-width').slick({
	  dots: true,
	  infinite: true,
	  speed: 100,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,   
	});

	$('.one-time').slick({
	  dots: true,
	  infinite: true,
	  speed: 100,
	  slidesToShow: 1,
	  adaptiveHeight: true
	  // height: 400px
	});

});

	