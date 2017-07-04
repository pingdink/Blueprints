// Chnage display for login page

// We are going to edit the inner text for for login UI
var registerButton = document.getElementsByClassName("registerButton");
// Hide the upper twoThirds of page
var topTwoThird = document.getElementsByClassName("topTwoThird");
// Hide h1 from register class
var registerDiv = document.getElementsByClassName("register");
// Get login class div
var loginDiv = document.getElementsByClassName("login");
var click = false;


function toggleLogin() {
	if(!click) {
		//registerDiv[0].onclick = "null"// We've got to disable the toggleFunction to enter data into form
		topTwoThird[0].style.display = "none"; // hide topTwoThird
		registerDiv[0].children[0].style.display = "none"; // hide h1
		registerDiv[0].children[1].style.display = "block"; // display form
		loginDiv[0].children[0].innerText = "< Login"; // Update Login button
		registerButton[0].value = "Login";
		click = true;
	} else {
		topTwoThird[0].style.display = "block"; // display topTwoThird
		registerDiv[0].children[0].style.display = "block"; // show h1
		registerDiv[0].children[1].style.display = "none"; // hide  form
		loginDiv[0].children[0].innerText = "Login >"; // Revert Login button
		registerButton[0].value = "Register"; // Revert button in form
		console.log("register");	
		click = false;
	}
}
