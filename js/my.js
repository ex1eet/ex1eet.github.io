

jQuery(document).ready(function($) {
	$('.drop-menu').click(function(event) {
		$(this).next().slideToggle();
	});