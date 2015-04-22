//load our node_modules
var express = require("express");
//create our app instance
var app = express();
//create a route to respond to requests
app.get("/", function( req, res, next ){
	console.log("Path", req.path);
	console.log("Headers", req.headers);
	res.send("Hello World");
});
//listen on a port
app.listen( 4000 );