// ================ CONFIGURATION ================

const ipaddress = "http://127.0.0.1" + ":";

const hostaddress = ipaddress + "3000";
const paperhostaddress = ipaddress + "3040";
const chathostaddress = ipaddress + "3050";








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


    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();


    document.getElementById("user-greeter").innerHTML = Cookies.get("username-name");

});

// ===================================================




// ================ Local Functions ================









// ===================================================









// ================ Global Functions ================

$(".logout-btn").click(function () {
    Cookies.remove('username');
    Cookies.remove('username-name');
    //console.log(document.getElementById("global-script").getAttribute("src"));
    window.location = $("#global-script").attr("src").replace("js/script.js", "pages/login.html");

});








// ==================================================
