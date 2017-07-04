// function for registering a user 

// Get div from page above the Register part. We are going to hide it
var topTwoThird = document.getElementsByClassName("topTwoThird");
// Get login div to hide
var loginDiv = document.getElementsByClassName("login");
// Get class registrationForm. We are going to display this w/click function
var registrationForm = document.getElementsByClassName("registrationForm");
// Get registerDiv class to update the button
var registerDiv = document.getElementsByClassName("register");
var click = false; // has user clicked

function toggleRegistrationForm() {
	if(!click) {
		registrationForm[0].style.display = "block"; // Display the registration form
		registerDiv[0].children[0].innerText = "< Register"; // Update button
		topTwoThird[0].style.display = "none"; // hide top
		loginDiv[0].style.display = "none";
		click = true;
	} else {
		registerDiv[0].children[0].innerText = "Register >";
		registrationForm[0].style.display = "none";
		topTwoThird[0].style.display = "block";
		loginDiv[0].style.display = "block";
		click = false;
	}
}

