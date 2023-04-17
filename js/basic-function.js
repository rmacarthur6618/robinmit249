// create variable
var msg = 'Sign up to receive our newsletter for 10% off!';

// create function to update content
function updateMessage() {
	var el = document.getElementById('message');
	el.textContext = msg;
}

// call the function
updateMessage();