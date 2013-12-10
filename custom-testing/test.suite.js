(function() {

	// Need more research on this...
	// "use strict";

	var queue = [], paused = false, results;

	this.assert = function(bool, desc) {
		var li = document.createElement("li");
		li.className = bool ? "passed" : "failed";
		li.appendChild(document.createTextNode(desc));
		results.appendChild(li);
		if (!bool) {
			li.parentNode.parentNode.className = "failed";
		}
		return li;
	};

	this.pause = function() {
		paused = true;
	};

	this.resume = function() {
		paused = false;
		setTimeout(runTest, 1);
	};

	this.test = function(name, fn) {
		queue.push(function() {
			results = document.getElementById("results");
			results = assert(true, name).appendChild(document.createElement("ul"));
			fn();
		});
		runTest();
	};

	function runTest() {
		if (!paused && queue.length) {
			queue.shift()();
			if (!paused) {
				resume();
			}
		}
	}

})();