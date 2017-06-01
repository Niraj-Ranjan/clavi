var loggeduser = Cookies.get('username-name');
console.log(loggeduser);
Materialize.toast("Welcome " + loggeduser + "!", 5000);
