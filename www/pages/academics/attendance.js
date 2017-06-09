var uname = Cookies.get("username");


function getAttendance() {
	$.get(hostaddress + "/attendance", {
		username: uname
	}, function (attendancedata) {
		innerdata = "";
		total = 0;
		attendanceLength = 0;
		for (subject in attendancedata) {

			attendancevalue = attendancedata[subject];

			if (attendancevalue >= 80) {
				subjectcolor = "#00dd00";
			} else if (attendancevalue >= 60) {
				subjectcolor = "#dddd00";
			} else {
				subjectcolor = "#dd0000";
			}

			innerdata = innerdata.concat("<div class='row'><div class='col s12 m3 truncate'>" + subject + "</div><div class='col s12 m9'><div class='graph-bar' style='width:" + attendancevalue + "%;background:" + subjectcolor + "'>" + attendancevalue + "%</div></div></div>");

			attendanceLength++;

			total = total + attendancevalue;
			//console.log(total);
		}
		//console.log(innerdata);
		document.getElementById("attendance-graph-cotainer").innerHTML = innerdata;

		average = total / attendanceLength;

		//console.log(total);
		//console.log(attendanceLength);
		//console.log(average);

		if (average >= 75) {
			attendanceStatus = "good";
		} else {
			attendanceStatus = "poor";
		}
		document.getElementById("attendance-status").innerHTML = attendanceStatus;

	});
}

$(document).ready(function () {
	getAttendance();
});
