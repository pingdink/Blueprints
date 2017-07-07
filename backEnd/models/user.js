// Defines how a user is stored in the db
// Schema

// import is
const mongoose = require('mongoose');

// Create the schema
const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// We've got to export the Schema so that the rest of the app can acces it
const User = module.exports = mongoose.model('User', userSchema);
	
	
