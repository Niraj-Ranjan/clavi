var uname = Cookies.get("username");


function getAttendance() {
    showWait();
    $.get(hostaddress + "/library", {
        username: uname
    }, function (lib_data) {
        //var innerdata = "<div class='row'>";
        var innerdata = "<ul class='collection full-width'>";
        //var innerdata = "";
        var total = 0;
        var no_books = 0;

        for (var subject in lib_data) {

            var book_val = lib_data[subject];
