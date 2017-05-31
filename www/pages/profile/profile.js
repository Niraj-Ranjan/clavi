var uname = Cookies.get("username");
//console.log(uname);

$(document).ready(function () {
	$.get(hostaddress + "/userdata", {
		username: uname
	}, function (data) {
		console.log(data);
		for (term in data) {

			//field = "#"+term;
			//console.log(field);
			document.getElementById(term).innerHTML = data[term];
		}
		//document.getElementById("user-img").setAttribute("src", data["user-img"]);
	});
});
