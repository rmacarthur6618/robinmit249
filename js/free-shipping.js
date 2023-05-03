var msg = '<h3 id="note">This item qualifies for free shipping!</h3>';
msg += '<a href="#" id="buyButton" onclick="dismissNote()">OK<script src="js/free-shipping.js"></script></a>';

function freeShipping () {
	var elNote = document.createElement('div');       
	elNote.setAttribute('id', 'note');                
	elNote.innerHTML = msg;                           
	document.body.appendChild(elNote);  
}              

function dismissNote() {                         
  document.body.removeChild(elNote);
}

var elClose = document.getElementById('buyButton');
elClose.addEventListener('click', dismissNote, false);