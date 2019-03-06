if (localStorage["KeyProfile"] == "Garlfield"){
	 const linkProfile = `<li><a class="navigation_link" href="../profile/profile.html">Hi,Garlfield 
	 <img class="avatar" 
	 src="../info/img/photo.jpg" title="avatar" height="50px" width="80px"></a></li>`;
	 const node = document.getElementById("linkProfile");
	 node.parentNode.removeChild(node);
	 document.querySelector("#header").innerHTML += linkProfile;
}
