$(document).ready(function() {
	$('.about-slider').slick({
		arrows: true,
 		prevArrow:'<i class="fa fa-chevron-left slider_arrows left-arrows"></i>',
 		nextArrow:'<i class="fa fa-chevron-right slider_arrows right-arrows"></i>'
 	});
	$('.blog-slider').slick({
		arrows: true,
 		prevArrow:'<i class="fa fa-chevron-left slider_arrows blog-left-arrows"></i>',
 		nextArrow:'<i class="fa fa-chevron-right slider_arrows blog-right-arrows"></i>'
 	});
});