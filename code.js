$(document).ready(function() {
	$('.card').click(function() {
	    $('.card').toggle(50);
	    $('.card-on').toggle(50);
	});

	$('.active').click(function() {
	    $('.card-on').hide();
	    $('.card').show();
	});

});