function hexClock() {
// Select the DOM elements
var h = document.querySelector("#hour");
var m = document.querySelector("#minute");
var s = document.querySelector("#second");

// Get the current time
var today = new Date();
var Seconds = today.getSeconds();
var Minutes = today.getMinutes();
var Hours = today.getHours();

// if the hour/min/sec is less than 10, add 0 at begining.
Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;
Minutes = (Minutes < 10) ? "0" + Minutes : Minutes;
Hours = (Hours < 10) ? "0" + Hours : Hours;

// Output the Time
h.innerHTML = Hours;
m.innerHTML = Minutes;
s.innerHTML = Seconds;

// Make the body bakground-color equal to the hex value of current time.
var color = "#" + Hours + Minutes + Seconds;
document.body.style.background = color;
}

// Call the function after every second. 
setInterval(hexClock, 1000);