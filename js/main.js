// Main JS File Unminified 
$(function(){
	// Function to check navigation placement
	function stickyNavigation(){
		var y = $(document).scrollTop();
		var t = $('#navCue').offset().top - 100;

		if (y > t) {
		    $('#main-navbar').addClass('sticky');
		} else {
		    $('#main-navbar').removeClass('sticky');
		}
	}

	$('#home-video-background').coverVid(1920, 1080);

	$('#work-sort').mixItUp();

	// Check for nav onload
	stickyNavigation();

	// Navigation update on scroll
	$(document).scroll(function () {
		stickyNavigation();
	});

});