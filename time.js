let target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
let days, hours, minutes, seconds; // variables for time units

let countdown = document.getElementById("countdown");  // get tag element

getCountdown();

setInterval(() => { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target

	let current_date = new Date().getTime();
	let seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value

	countdown.innerHTML = `<span>${days}:</span><span>${hours}:</span><span>${minutes}:</span><span>${seconds}</span>`; 
	
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

