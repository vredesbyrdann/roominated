test("Backbone core testing...", function() {
	var object = {};
	_.extend(object, Backbone.Events);
	// Proves Underscore.js & Backbone.js are avaliable...
	object.on("message", function(message) {
		assert(message === "Thus avaliable, thus used...", "Underscore.js & Backbone.js are avaliable...");
	});
	object.trigger("message", "Thus avaliable, thus used...");
	// Proves jQuery is avaliable...
	assert(typeof jQuery === "function", "jQuery is avaliable...");
});

