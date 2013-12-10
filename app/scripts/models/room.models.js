App.Models.Room = Backbone.Model.extend({
	defaults: {
		name: "I'm a room with no name...",
		timeSlots: {
			slotOne: {
				time: "8:00 A.M.",
				booked: false
			},
			slotTwo: {
				time: "8:30 A.M.",
				booked: false
			},
			slotThree: {
				time: "9:00 A.M.",
				booked: false
			}
		}
	},
	validate: function(attrs, options) {
		console.log(attrs);
		console.log(options);
	},
	initialize: function(attributes) {
		console.log(attributes);
		var roomName = attributes.name;
		console.log("Room model: " + roomName + " was initialized...");
	}
});

/*var MyModel = Backbone.Model.extend({
    initialize: function () {
        this.set("obj1", new Obj());
    }
});*/