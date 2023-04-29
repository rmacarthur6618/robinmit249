var msg = '<div class="noteHeader">This item is eligible for free shipping!</div>';
msg += '<input type="button" name="button" value="OK" class="buyButton">';

var elFreeship = document.createElement('div');
elFreeship.setAttribute('id', 'note');
elFreeship.innerHTML = msg;
document.body.appendChild(elFreeship);

function dismissNote() {
	document.body.removeChild(elFreeship);
}

var elClose = document.getElementById('buyButton');
elClose.addEventListener('click', dismissNote, true);