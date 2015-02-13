// Main JS File Unminified 
$(function(){
	// Function to check navigation placement
	function stickyNavigation(){
		var y = $(document).scrollTop();
		var t = $('#navCue').offset().top - 100;

		if (y > t) {
		    $('#main-navbar').addClass('sticky');
		    $('#mobile-nav-toggle').addClass('sticky');
		} else {
		    $('#main-navbar').removeClass('sticky');
		    $('#mobile-nav-toggle').removeClass('sticky');
		}
	}

	$('#home-video-background').coverVid(1920, 1080);

	$('#work-sort').mixItUp();

	//Mobile Nav
	$('#mobile-nav-toggle').click(function() {
	  	event.preventDefault();
		$('body').toggleClass('open');
		$('.navicon-button').toggleClass("open-button");
	});

	// Check for nav onload
	stickyNavigation();

	// Navigation update on scroll
	$(document).scroll(function () {
		stickyNavigation();
	});

});