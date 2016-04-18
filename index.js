
function helloWorld (selector) {
	var element = $(selector);
	return function (name) {
		element.text("Hello world!");
	}
}

