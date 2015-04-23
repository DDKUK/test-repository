//load our node_modules
var express = require("express"),
	path = require("path"),
	fs = require("fs");
//create our app instance
var app = express();

//configure our jade
var dirViews = path.join( __dirname, "views" );
app.set("view engine", "jade");
app.set("views", dirViews );

//create a route to respond to requests
app.get("/", function( req, res, next ){
	res.redirect("/home");
} );

//bind our modules
app.use( "/home", require("./app/home") );
app.use( "/api", require("./app/api") );

//expose public directory
var dirPublic = path.join( __dirname, "public" );
app.use( express.static( dirPublic ) );

//our 404
app.use( function( req, res, next ){
	res.render("404");
} );

//listen on a port
app.listen( 4000 );