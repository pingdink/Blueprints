var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
// Connect to db

mongoose.connect('mongodb://localhost/loginapp');


// Include files we'll be using for routes.
var routes = require("./routes/index");
var users = ("./routes/users");


// Init app instance
var pp = express();

// Set the view engine for rendering our html

// body parser middle ware
// This code makes parsing request super fast and painless
// It does magic...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder
// Publicly accessible to the browser
app.use(express.static(path.join(__dirname, "public")); // Could rename this to frontend

// Express session
// A session refers to the connection between client and server.
app.use(session({
	secret: 'secret,
	saveUninitialized: true,
	resave: true
}));

// Express validator.

