$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	$("#hero-slider").css({
		"-webkit-filter": "blur(" + (scroll/100) + "px)",
		filter: "blur(" + (scroll/100) + "px)"
	});
});