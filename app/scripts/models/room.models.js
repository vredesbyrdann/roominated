App.Models.CoreData = Backbone.Model.extend({
	defaults: {
		isBooked: true,
		isNotBooked: false
	}
});

App.Models.Room = Backbone.Model.extend({
	defaults: {
		name: "No need for a name...",
		booked: null
	},
	initialize: function() {
		console.log("Model...");
		this.set("coreData", new App.Models.CoreData());
		this.on("change:booked", function(model) {
			var bookedStatus = model.get("booked");
			console.log("Rooms booked status is " + bookedStatus);
		});
	},
	bookTimeSlot: function(booking) {
		this.set({ booked: booking });
	}
});

// Testing for Parse...
var ParseRoom = Parse.Object.extend({
	className: "ParseRoom",
	initialize: function() {
		console.log("Parse Model...");
	}
});

/*
var ParseRoomCollection = Parse.Collection.extend({
  model: ParseRoomModel
});
 
var rooms = new ParseRoomCollection();
 
var query = new Parse.Query(ParseRoomModel);
query.equalTo("user", Parse.User.current());
rooms.query = query;
rooms.fetch();
*/