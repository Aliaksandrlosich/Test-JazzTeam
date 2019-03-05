localStorage["KeyProfile"] = "Garlfield"
if (localStorage["KeyProfile"] !== "Garlfield") {
	document.location.replace("../autorization/autorization.html");
	alert("No access");
}