
function helloWorld (selector) {
	var element = $(selector);
	return function (name) {
		element.text("Hello world!");
	}
}

function doSomethingWeird(selector) {
	var element = $(selector)
	console.log(element)
}

