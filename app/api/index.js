var express = require("express");

var app = module.exports = express();

var users = [
	new UserModel("Jimi","Developer"),
	new UserModel("Gavin","Developer"),
	new UserModel("Darren","Designer"),
	new UserModel("Matt","Designer")
];

app.get("/users", function( req, res, next ){
	res.send( users );
});

//HELPERS
function UserModel( name, role ){
	var self = this;
	
	self.name = name;
	self.role = role;
}

