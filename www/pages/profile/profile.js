var uname = Cookies.get("username");


$(document).ready(function () {
	$.get(hostaddress + "/userdata", {
		username: uname
	}, function (data) {
		innerdata = "";
		for (term in data) {
			innerdata = innerdata.concat("<tr><td class='strong'>" + term + "</td><td>" + data[term] + "</td></tr>");
		}
		//console.log(innerdata);
		document.getElementById("info-table-body").innerHTML = innerdata;
		//document.getElementById("user-img").setAttribute("src", data["user-img"]);
	});
});
