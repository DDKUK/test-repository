//load our node_modules
var express = require("express"),
	path = require("path");
//create our app instance
var app = express();
//create a route to respond to requests
var dirPublic = path.join( __dirname, "public" );
app.use( express.static( dirPublic ) );
//listen on a port
app.listen( 4000 );