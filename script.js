function clock() {
	let hour = document.getElementById("hour");
	let minute = document.getElementById("minute");
	let seconds = document.getElementById("seconds");
	let ampm = document.getElementById("ampm");

	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();

	if (h < 12) {
		ampm.innerHTML = "AM";
	} else {
		ampm.innerHTML = "PM";
	}
	// Add 0 to the begining of number if less than 10
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	hour.innerHTML = h;
	minute.innerHTML = m;
	seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);
