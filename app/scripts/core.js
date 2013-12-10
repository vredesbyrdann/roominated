var App = {
	Models: {},
	Collections: {},
	Rooms: null
};

$(function() {
	
	App.Rooms = new App.Collections.Rooms();

	window.theOuyaRoom = new App.Models.Room({
		name: "The Ouya Room",
	});

	window.theSmallRoom = new App.Models.Room({
		name: "The Small Room",
	});

	App.Rooms.add(theOuyaRoom);
	App.Rooms.add(theSmallRoom);

	var roomListing = "";
	App.Rooms.each(function(room) {

		// What the 'template' will look like...

		roomListing += "<div>" +
					      room.get("name") + " " +
						  room.get("timeSlots").slotOne.time + " " +
						  room.get("timeSlots").slotTwo.time + " " +
						  room.get("timeSlots").slotThree.time + " " +
					   "</div>";
	});						
	$("#display").html(roomListing);

});