if (localStorage["KeyProfile"] == "Garlfield"){//There is access => changes the authorization with the profile
	const linkProfile = `<li><a class="navigation_link" href="../profile/profile.html">Hi,Garlfield 
	 <img class="avatar" 
	 src="../img/photo.jpg" title="avatar" height="50px" width="80px"></a></li>`;
	const node = document.getElementById("linkProfile");
	node.parentNode.removeChild(node);
	document.querySelector("#header").innerHTML += linkProfile;
}
