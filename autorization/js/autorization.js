function validation() {
	let login = document.getElementById("input_name").value;
	let passw = document.getElementById("input_password").value;
	console.log(login);
	console.log(passw);
	if(login == "Admin" && passw == "12345678")
	{
		localStorage["KeyProfile"] = "Garlfield";
		location="../profile/profile.html";
	}
	else {
		alert("Wrong username or password");
	}
}
