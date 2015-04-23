var target = null;

if(typeof module !== "undefined" && module.exports){
	//we are in NODE - module.exports is where Node will look for attributes
	target = module.exports;
}else{
	//we are in the browser - create a namespace and use it to export our modules
	target = window.models = {};
}

(function( target ){
	
	var UserModel = target.UserModel = function( name, role ){
		var self = this;
		
		self.parseJSON({
			_id : generateRandomId(),
			name : name,
			role : role
		})
	}
	
	UserModel.prototype.parseJSON = function( data ){
		var self = this;
		
		self._id = data._id || "";
		self.name = data.name || "";
		self.role = data.role || "";
	}
	
	UserModel.prototype.getDescription = function(){
		var self = this;
		
		return self.name + " is a kick ass " + self.role;
	}
	
	
	function generateRandomId( len ){
		var output = "";
		var chars = "abcdefghijklmnopqrstuvwxyz01234567890";
		len = len || 10;
		
		while( output.length < len ){
			output += chars[ Math.floor( Math.random() * chars.length ) ];
		}
		
		return output;
	}
	
})( target );