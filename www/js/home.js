var loggeduser = Cookies.get('username-name');
//console.log(loggeduser);

$(document).ready(function () {
	Materialize.toast("Welcome " + loggeduser + "!", 3000);
	getAllNotifications();
});








function getNotifications(type, section) {
	$.get(hostaddress + "/notifications", {
		type: type
	}, function (notifications) {
		noticelist = "";
		for (notice in notifications[section]) {

			for (x in notifications[section][notice]) {
				noticelist = noticelist.concat("<a href='" + notifications[section][notice][x] + "'>" + x + "</a><br>");
				//console.log(x);

			}
			//console.log(noticelist);
			document.getElementById("notification-" + type + "-" + section).innerHTML = noticelist;
		}
	});
}

function getAllNotifications() {
	getNotifications("general", "notices");
	getNotifications("departmental", "notices");
	getNotifications("general", "events");
	getNotifications("departmental", "events");
}
