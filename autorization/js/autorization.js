function validation() {
	let login = document.getElementById("input_name").value;
    let passw = document.getElementById("input_password").value;
    let requestURL = "https://aliaksandrlosich.github.io/Test-JazzTeam/autorization/js/password.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
	request.onload = function() {
	let data = request.response;
	if(login == data.login && passw == data.Password)
	{
		localStorage["KeyProfile"] = "Garlfield";
		location="../profile/profile.html";
	}
	else {
		alert("Wrong username or password");
	}
}
}