// Click function for displaying About w/o reloading page

var aboutInfo = document.getElementById("aboutDescription");
var click = false; // User has not lcicked yet
function displayAbout() {
	if(!click) { 
		// Display content
		aboutInfo.style.display = "block";
		click = true; // User clicked
	} else {
		aboutInfo.style.display = "none";	
		click = false;
	}
}


