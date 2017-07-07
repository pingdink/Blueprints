// Express app thereforn require it
var express = require("express");
var router = express.Router(); // Return a router so that we can move around the backEnd and access files
// We need node modules http
var http = require('http');
// We need to get the user.js schema so that we can populate the db
let User = require('../models/user');
// Check user input it just can't be empty. Do this checking on the client side


// parse the form and determine if its for login or for registration
//
//

console.log("HEY");
router.post('/process', function(req, res) {
	//res.send('heybo');
	
	// Get data from the form
	var username = req.body.username;
	var password = req.body.password;
	var formRoute = req.body.formRoute; // This var stores whether we're logging in or registering

	if(formRoute === 'Register') {
		// We've go to update the db and then render page
		// Currently username and password can be anything - even spaces
		// The below returns a document we can put into mongo I think
		var newUser = new User ({
			username: username,
			password: password
		});	
		// Add the user to the db
		newUser.save(newUser, function(error, user) {
			if(error) {
				console.log(newUser);
			       	throw error;
			} else {
				// Currently doesn't prevent duplicate users.
			       	res.render('success'); // the success page has JS that toggles the Login page
			}
		});

	} else {

		// rename username var from above se we can differentitate username in db
		var name = username;
		var pass = password;

		// determin if username and associate password is in DooB
		// regUserPass is shorthand for registered Username Password
		var userPassInDB = User.find({username: name, password: pass}, function(error, regUserPass) {
			if(error) {
				console.log(error);
				throw error;
			}	
			// The userName is in the db
			if(regUserPass.length === 1) {
				// The length is one because that is the number of items in
				// mongoose array that regUserPass stores
				// This array will not have length 1 unless username and password 
				// entered are valid
				console.log(regUserPass.length);
				console.log(userPassInDB.getQuery());
				
				res.render('dashboard');
			} else {
				res.render('loginFail');
			}	

		});
	}		
	
});
// I gues we've got to export the module...

module.exports = router; // This line makes this route available to server.js
