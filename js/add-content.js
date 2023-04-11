//Changes greeting display depending on the time. This is an example from the Javascript & JQuery book

var today = new Date();
var hourNow = today.getHours();
var greeting;

//This part determines which greeting to use
if (hourNow > 18) {
	greeting = 'Good evening';
} else if (hourNow > 12) {
	greeting = 'Good afternoon';
} else if (hourNow > 0) {
	greeting = 'Good morning';
} else {
	greeting = 'Welcome';
}
document.write('<h3>' + greeting + '</h3>');