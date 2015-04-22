//load our node_modules
var express = require("express"),
	path = require("path");

//create our app instance
var app = express();

//configure our jade
app.set("view engine", "jade");
app.set("views", path.join( __dirname, "views" ) );

//create a route to respond to requests
app.get("/", function( req, res, next ){
	res.render("index");
});

//expose public directory
var dirPublic = path.join( __dirname, "public" );
app.use( express.static( dirPublic ) );

//listen on a port
app.listen( 4000 );