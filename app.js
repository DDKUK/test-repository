
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
app.get("/", renderHtml );
app.get("/:page", renderHtml );

var viewCount = 0;

function renderHtml( req, res, next ){
	var page = req.params.page || "index";
	var pathPage = path.join( dirViews, page + ".jade" );
	//check the required page exists
	fs.exists( pathPage, function( boolExists ){
		if( boolExists ){
			res.locals = {
				path : req.path,
				page : page,
				dirRoot : __dirname,
				viewCount : ++viewCount
			};
			
			res.render( page );
		}else{
			next();
		}
	} );
}

//expose public directory
var dirPublic = path.join( __dirname, "public" );
app.use( express.static( dirPublic ) );
//our 404
app.use( function( req, res, next ){
	res.render("404");
} );
//listen on a port
app.listen( 4000 );