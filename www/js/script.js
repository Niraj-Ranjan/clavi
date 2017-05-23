$(document).ready(function(){
	// initialize jquery
	$('.button-collapse').sideNav();
	//$('.parallax').parallax();
});


$("#reset-box-btn").click(function(){
	$("#login-box").slideUp();
	$("#password-reset-box").slideDown();
	console.log("hi")
});

$("#reset-cancel-btn").click(function(){
	$("#login-box").slideDown();
	$("#password-reset-box").slideUp();
});
