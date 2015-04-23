$(document).ready(function(){
	
	var modelApp = new AppModel();
	ko.applyBindings( modelApp );
	
	$.getJSON("/api/users", function( data ){
		modelApp.users( data );
	})
	
});

function AppModel(){
	var self = this;
	
	self.selectedUser = ko.observable();
	self.users = ko.observableArray();
}
