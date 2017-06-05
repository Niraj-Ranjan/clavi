var uname = Cookies.get("username");


function getAcademics() {
	$.get(hostaddress + "/academics", {
		username: uname
	}, function (academicsdata) {

		finalinnerdata = "";

		totalMarks = 0;

		for (subject in academicsdata) {

			innerDataStart = "<div class='one-subject row'><p><span class='strong'>" + subject + "</span> - " + academicsdata[subject].teacher + "</p><table class='centered'><thead><tr><td colspan='7' class='center'>TAE</td><td colspan='3' class='center'>CAE</td><td class='center'>ESE</td><td class='center'>Total</td></tr><tbody><tr>";

			innerDataMiddle = "";
			totalMarks = 0;
			for (type in academicsdata[subject].marks) {
				for (mark in academicsdata[subject].marks[type]) {
					innerDataMiddle = innerDataMiddle.concat("<td>" + academicsdata[subject].marks[type][mark] + "</td>");
					totalMarks = totalMarks + academicsdata[subject].marks[type][mark];
				}
			}
			innerDataMiddle = innerDataMiddle.concat("<td>" + totalMarks + "</td>");
			innerDataEnd = "</tr></tbody></thead></table></div>";
			innerdata = innerDataStart + innerDataMiddle + innerDataEnd;
			finalinnerdata = finalinnerdata.concat(innerdata);
		}


		//console.log(innerdata);
		document.getElementById("marks-table-container").innerHTML = finalinnerdata;



		//console.log(total);
		//console.log(attendanceLength);
		//console.log(average);

	});
}

$(document).ready(function () {
	getAcademics();
});
