// expiry details for offer
var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
	// date variables within function
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	// adds 7 days to current date
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	// data for weekday/month names
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
	// collects parts of the date to show on page
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	// creates message text
	expiryMsg = 'Offer expires next ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

}());