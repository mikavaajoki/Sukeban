$( document ).ready(function () {
	$(".latest-content-item").slice(0, 8).show();
	if ($(".latest-content-item:hidden").length != 0) {
		$("#load-more-button").show();
	}   
	$("#load-more-button").on('click', function (e) {
		e.preventDefault();
		$(".latest-content-item:hidden").slice(0, 8).fadeIn('slow');
		if ($(".latest-content-item:hidden").length == 0) {
		$("#load-more-button").fadeOut('slow');
		}
	});
});