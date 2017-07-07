// Import modules required
const express = require('express');

// We user body parser to parse the 'body' of an http requrest. Node has some methods 
// for doing this. I'm not doing it the node way because I want to finsih this.
const bodyParser = require('body-parser');
// Path module is part of nodejsy
// it does operations on 'paths'. We use it when we handle routes. Also when navigating backend
const path = require('path');

// Get mongoose lib to interact with mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Blueprints_database');
let db = mongoose.connection; // Just renaming our connection here.
//Check db connection
db.once('open', function () {
	console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function(error) {
	console.log(error);
});

// Make it possible to access the schema we define for our db
let Article = require('./models/user');


// Create express instance
const app = express();

// body-parse middleware. 
// We have our app instance use it. Then we specify how our middleware will handle the http reqs
app.use(bodyParser.json()); // Going to format the http request as JSON
app.use(bodyParser.urlencoded({ extended: false })); // I think this shortens our https req

//// It tunrs out I have to use body parser to parse get/post requests...
// Maybe I could write them in node, but:x
//
// Routes
//
// Set views route for app instance. __dirname is the name of current directory this file is in.
// path.join(__dirname, concatenates the current directory with the views directory and returns
// a path that gets set to the express instance with the views attribute
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'pug'); // Our express instance now sets the view engine

// Set up our routes
// Routes specify where functionality is or where we render views from..
// Home page
app.get('/', function(req, res) {
	res.render('index');
});

// set routes for pages
let userRegistration = require('./routes/registrationValidation');
app.use('/registrationValidation', userRegistration);
// Shall I do a static frontend....
// Makes it possible for our express app to access files i npublic folder
// We use path.join and dirname to access the children in this forlder
app.use(express.static(path.join(__dirname, 'public')));
// Listen for requests

app.listen(3000, function() {
	console.log("server started on port 3000");
});
