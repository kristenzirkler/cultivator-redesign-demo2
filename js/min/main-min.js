$(function(){function o(){var o=$(document).scrollTop(),n=$("#navCue").offset().top-100;o>n?($("#main-navbar").addClass("sticky"),$("#mobile-nav-toggle").addClass("sticky")):($("#main-navbar").removeClass("sticky"),$("#mobile-nav-toggle").removeClass("sticky"))}$("#home-video-background").coverVid(1920,1080),$("#work-sort").mixItUp(),$("#mobile-nav-toggle").click(function(){event.preventDefault(),$("body").toggleClass("open"),$(".navicon-button").toggleClass("open-button")}),o(),$(document).scroll(function(){o()})});