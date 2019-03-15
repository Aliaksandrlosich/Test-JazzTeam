function exit() { //exit profile, delete localStorage flag
	delete localStorage["KeyProfile"]
	document.location.replace("../autorization/autorization.html");
}