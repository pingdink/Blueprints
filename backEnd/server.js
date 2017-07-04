// Import modules required
const express = require('express');

// Path module is part of nodejs
// it does operations on 'paths'. We use it when we handle routes. Also when navigating backend
const path = require('path');

// Create express instance
const app = express();

// Routes
//
// Set views route for app instance. __dirname is the name of current directory this file is in.
// path.join(__dirname, concatenates the current directory with the views directory and returns
// a path that gets set to the express instance with the views attribute
 app.set('views', path.join(__dirname, 'views'));
 app.set("view engine", "pug"); // Our express instance now sets the view engine

// Set up our routes
// Routes specify where functionality is or where we render views from..
// Home page
app.get('/', function(req, res) {
	res.render('index');
});


// Shall I do a static frontend....
// Makes it possible for our express app to access files i npublic folder
// We use path.join and dirname to access the children in this forlder
app.use(express.static(path.join(__dirname, "public")));
// Listen for requests

app.listen(3000, function() {
	console.log("server started on port 3000");
});
