// Global App...
var App = {
	// Backbone structure references...
	Models: {},
	Collections: {},
	// Instance for the 'Rooms Collection'...
	Rooms: null
};

// jQuery DOM ready...
$(function() {
	
	// Instance of the 'Rooms Collection'...
	App.Rooms = new App.Collections.Rooms();

	// Adding new 'Room' model instances...
	var ouyaRoom = new App.Models.Room();
	ouyaRoom.set({ name: "Ouya Room" });
	ouyaRoom.bookTimeSlot(ouyaRoom.get("coreData").get("isNotBooked"));
	console.log(ouyaRoom.get("name"));
	console.log(ouyaRoom.get("coreData").get("isBooked"));
	console.log(ouyaRoom.get("booked"));

	var smallRoom = new App.Models.Room();
	smallRoom.set({ name: "Small Room" });
	console.log(smallRoom.get("name"));
	console.log(smallRoom.get("coreData").get("isNotBooked"));

	// Adding the 'Room' models to the 'Rooms' collection...
	App.Rooms.add(ouyaRoom);
	App.Rooms.add(smallRoom);

	// Parse...

	var parseOuyaRoom = new ParseRoom();
	parseOuyaRoom.set("name", "The Ouya Room");
	parseOuyaRoom.save(null, {
		success: function(parseOuyaRoom) {
			console.log(parseOuyaRoom.id + " was created...");
		},
		error: function() {
			console.log(error.description + " has occured...");
		}
	});

	var parseSmallRoom = new ParseRoom();
	parseSmallRoom.set("name", "The Small Room");
	parseSmallRoom.save(null, {
		success: function(parseSmallRoom) {
			console.log(parseSmallRoom.id + " was created...");
		},
		error: function() {
			console.log(error.description + " has occured...");
		}
	});

	/*var query = new Parse.Query(ParseRoom);
	query.get("vlRzXl6rh0", {
		success: function(parseSmallRoom) {
			console.log("Object was retrieved...");
			console.log(parseOuyaRoom.get("name"));
		},
		error: function(object, error) {
			console.log("Object was not retrieved...");
		}
	});

	var newQuery = new Parse.Query(ParseRoom);
	query.get("ZInikZsuUW", {
		success: function() {
			console.log(parseSmallRoom.get("name"));
		},
		error: function() {
			console.log("Something bad happened...");
		}
	});*/

	parseSmallRoom.fetch({
		success: function() {
			console.log("Object was refreshed...");
		},
		error: function() {
			console.log("Object was not refreshed...");
		}
	});

});