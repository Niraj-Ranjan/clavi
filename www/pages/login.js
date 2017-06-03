$("#reset-box-btn").click(function () {
	$("#login-box").slideUp();
	$("#password-reset-box").slideDown();
	console.log("hi")
});

$("#reset-cancel-btn").click(function () {
	$("#login-box").slideDown();
	$("#password-reset-box").slideUp();
});

$("#sign-in-btn").click(function () {
	user = {
		uname: $("#username").val(),
		pword: $("#password").val()
	}
	$.get(hostaddress + "/login", user, function (data) {
		console.log(data);
		if (data == "true") {
			Cookies.set('username', user.uname, {
				expires: 7,
				path: '/'
			});

			$.get(hostaddress + "/username-name", {
				user: user.uname
			}, function (returnedusername) {
				Cookies.set("username-name", returnedusername, {
					expires: 7,
					path: '/'
				});
				window.location = "../home.html";
			});


		} else if (data == "false") {
			alert("Password Incorrect.");
		} else {
			alert("Sorry, " + user.uname + " not found.")
		}
	});
})
