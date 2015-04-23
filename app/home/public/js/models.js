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
			name : name,
			role : role
		})
	}
	
	UserModel.prototype.parseJSON = function( data ){
		var self = this;
		
		self.name = data.name || "";
		self.role = data.role || "";
	}
	
	UserModel.prototype.getDescription = function(){
		var self = this;
		
		return self.name + " is a kick ass " + self.role;
	}
	
	
})( target );