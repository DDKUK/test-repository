$(document).ready(function(){
	var api = new Api();
	
	var modelApp = new AppModel();
	//add some helper methods
	modelApp.saveUser = function(){
		//save changes to our selected user
		if( modelApp.selectedUser() ){
			api.updateUser( modelApp.selectedUser(), function(){
				alert("Saved!");
			} );
		}
	}
	
	//apply our bindings
	ko.applyBindings( modelApp );
	
	//load the users
	api.getUsers( function( err, data ){
		modelApp.users( data );
	});
});

function AppModel(){
	var self = this;
	
	self.selectedUser = ko.observable();
	self.users = ko.observableArray();
}