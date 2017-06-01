// ================ CONFIGURATION ================
const hostaddress = "http://192.168.225.68:3000";









// ===============================================









// ================   document.ready ================
$(document).ready(function () {
	// initialize jquery
	$('.button-collapse').sideNav();

	/*
	$('ul.tabs').tabs({
		swipeable: true
	});
	*/
	$('ul.tabs').tabs();
	//$('.parallax').parallax();
	/*
		$('.carousel.carousel-slider').carousel({
			fullWidth: true
		});
		$('.carousel').carousel();
	*/

	document.getElementById("user-greeter").innerHTML = Cookies.get("username-name");

});

// ===================================================




// ================ Local Functions ================









// ===================================================









// ================ Global Functions ================

$("#logout-btn").click(function () {
	Cookies.remove('username');
	Cookies.remove('username-name');
	window.location = "./pages/login.html";
});








// ==================================================
