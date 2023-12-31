// Create the bursts
const B_CHILD = {
    fill: { "#ffffff": "#ef1cec" },
    delay: "rand(300, 359)",
    duration: 700,
    pathScale: "rand(0.8, 1)",
    isSwirl: true,
    swirlSize: "stagger(-2,2)",
    swirlFrequency: 1 };
  
  const B_OPTS = {
    count: "rand(15,20)",
    top: "100%",
    children: {
      ...B_CHILD } };
  
  
  const burst1 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(150,170)" },
    x: -45,
    y: -335 });
  
  
  const burst1_2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(150,170)" },
    x: -45,
    y: -335,
    children: {
      ...B_CHILD,
      delay: "rand(260, 350)",
      pathScale: "rand(0.7, 0.8)",
      degreeShift: 20 } });
  
  
  
  const burst2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    x: 140,
    y: -315,
    children: {
      ...B_CHILD,
      fill: { "#ffffff": "#d8ff00" } } });
  
  
  
  const burst2_2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    x: 140,
    y: -315,
    children: {
      ...B_CHILD,
      fill: { "#ffffff": "#d8ff00" },
      delay: "rand(260, 350)",
      pathScale: "rand(0.7, 0.8)",
      degreeShift: 20 } });
  
  
  
  // Create interactive burst
  const burst_tune = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    left: 0,
    top: 0,
    x: 0,
    y: 0,
    children: {
      ...B_CHILD,
      delay: "rand(0, 50)",
      fill: { "#ffffff": "#d8ff00" } } });
  
  
  const burst_tune_2 = new mojs.Burst({
    ...B_OPTS,
    radius: { 0: "rand(100,150)" },
    left: 0,
    top: 0,
    children: {
      ...B_CHILD,
      fill: { "#ffffff": "#d8ff00" },
      delay: "rand(10, 150)",
      pathScale: "rand(0.7, 0.8)",
      degreeShift: 20 } });
  
  
  document.addEventListener("click", function (e) {
    burst_tune.generate().tune({ x: e.pageX, y: e.pageY }).replay();
    burst_tune_2.generate().tune({ x: e.pageX, y: e.pageY }).replay();
  });
  
  // Create the firework lines
  const FW_OPTS = {
    shape: "curve",
    fill: "none",
    isShowStart: false,
    strokeWidth: { 3: 0 },
    stroke: "#ffffff",
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 1000 };
  
  const fw1 = new mojs.Shape({
    ...FW_OPTS,
    radius: 170,
    radiusY: 20,
    top: "100%",
    y: -165,
    angle: 75,
    onStart: function () {
      burst1.replay(0);
      burst1_2.replay(0);
    } });
  
  
  const fw2 = new mojs.Shape({
    ...FW_OPTS,
    radius: 180,
    radiusY: 50,
    top: "100%",
    x: 50,
    y: -155,
    strokeDashoffset: { "100%": "-100%" },
    angle: -60,
    delay: 200,
    onStart: function () {
      burst2.replay(0);
      burst2_2.replay(0);
    } });
  
  
  // Underline under title
  const underline = new mojs.Shape({
    parent: document.getElementById("title"),
    shape: "curve",
    strokeLinecap: "round",
    fill: "none",
    isShowStart: false,
    strokeWidth: { "1em": "5em" },
    stroke: "#ffffff",
    strokeDasharray: "200%",
    strokeDashoffset: { "200%": "100%" },
    radius: 150,
    radiusY: 10,
    y: "1.1em",
    angle: -10,
    duration: 2000,
    delay: 1000 }).
  then({
    strokeWidth: { "5em": "1em" },
    strokeDashoffset: { "100%": "-200%" },
    duration: 2000,
    delay: 10000 });
  
  const timelineText = new mojs.Timeline({
    repeat: 2018 }).
  
  add(underline).
  play();
  
  // Fire off the explosions
  const timeline = new mojs.Timeline({
    repeat: 2018 }).
  
  add([fw1, fw2]).
  play();
  
  // Create sounds
  // var explosion = new Audio("https://www.freesound.org/data/previews/21/21410_21830-lq.mp3"); // buffers automatically when created
  // explosion.play();




  // Countdown timer code 

let newSecond1, 
newSecond2, 
newMinute1, 
newMinute2, 
newHour1, 
newHour2, 
newDay1, 
newDay2 = 0; 
let lastSecond1, 
lastSecond2, 
lastMinute1, 
lastMinute2, 
lastHour1, 
lastHour2, 
lastDay1, 
lastDay2 = 0; 
const countdownDiv = document.querySelector(".countdown"); 
const newYearDate = new Date("31 Dec, 2024, 23:59:59"); 
const currentDate = new Date(); 
const milliDiff = newYearDate.getTime() - currentDate.getTime(); 
const countDown = () => { 
const newYearDate = new Date("31 Dec, 2024, 23:59:59"); 
const currentDate = new Date(); 
const milliDiff = newYearDate.getTime() - currentDate.getTime(); 
const totalSeconds = Math.floor(milliDiff / 1000); 
const totalMinutes = Math.floor(totalSeconds / 60); 
totalHours = Math.floor(totalMinutes / 60); 
remSeconds = totalSeconds % 60; 
remMinutes = totalMinutes % 60; 
const remDays = Math.floor(totalHours / 24); 
const remHours = totalHours % 24; 
if (remMinutes < 10) { 
	remMinutes = "0" + remMinutes; 
} 
if (remSeconds < 10) { 
	remSeconds = "0" + remSeconds; 
} 
if (totalHours < 10) { 
	totalHours = "0" + totalHours; 
} 
// countdownDiv.innerHTML = 
	`<h1 class="heading">Time Remaining: ${remDays}d : 
		${remHours}h : ${remMinutes}m : ${remSeconds}s</h1>`; 
// document.getElementById("hour1").innerHTML = 
	Math.floor(remHours/ 10); 
// console.log(document.getElementById("hour1")) 
newSecond2 = Math.floor(remSeconds % 10); 
newSecond1 = second1.innerText = Math.floor(remSeconds / 10); 
newMinute1 = Math.floor(remMinutes / 10); 
newMinute2 = Math.floor(remMinutes % 10); 
newHour1 = Math.floor(remHours / 10); 
newHour2 = Math.floor(remHours % 10); 
newDay1 = Math.floor(remDays / 10); 
newDay2 = Math.floor(remDays % 10); 

slideDigit("day1", newDay1, lastDay1); 
slideDigit("day2", newDay2, lastDay2); 
slideDigit("hour1", newHour1, lastHour1); 
slideDigit("hour2", newHour2, lastHour2); 
slideDigit("minute1", newMinute1, lastMinute1); 
slideDigit("minute2", newMinute2, lastMinute2); 
slideDigit("second1", newSecond1, lastSecond1); 
slideDigit("second2", newSecond2, lastSecond2); 
setTimeout(() => { 
	second2.innerText = lastSecond2 = newSecond2; 
	second1.innerText = lastSecond1 = newSecond1; 
	minute2.innerText = lastMinute2 = newMinute2; 
	minute1.innerText = lastMinute1 = newMinute1; 
	hour2.innerText = lastHour2 = newHour2; 
	hour1.innerText = lastHour1 = newHour1; 
	day2.innerText = lastDay2 = newDay2; 
	day1.innerText = lastDay1 = newDay1; 
}, 500); 
}; 
let myInterval = setInterval(countDown, 1000); 

// Replacing countdown time to current time 
setTimeout(() => { 
clearInterval(myInterval); 
setInterval(newTimer, 1000); 
startFiringConfetti(); 
}, milliDiff); 

const newTimer = () => { 
const newCurrentDate = new Date(); 
let hours = newCurrentDate.getHours(); 
let minutes = newCurrentDate.getMinutes(); 
let seconds = newCurrentDate.getSeconds(); 

if (seconds < 10) { 
	seconds = "0" + seconds; 
} 
if (minutes < 10) { 
	minutes = "0" + minutes; 
} 
if (hours < 10) { 
	hours = "0" + hours; 
} 
// countdownDiv.innerHTML = 
	`<h1 class="heading">CountDown: ${hours} : ${minutes} : ${seconds}</h1>`; 
}; 

function startFiringConfetti() { 
const canvas = document.getElementById("confettiHTMLCanvas"); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

const ctx = canvas.getContext("2d"); 

const pieces = []; 
const numberOfPieces = 200; 
const colors = ["#f00", "#0f0", "#00f", "#ff0", "#0ff"]; 

function newPiece() { 
	this.x = canvas.width * Math.random(); 
	this.y = canvas.height * Math.random() - canvas.height; 
	this.rotation = Math.random() * 360; 
	this.color = 
		colors[Math.floor(Math.random() * colors.length)]; 
	this.diameter = Math.random() * 10 + 5; 
	this.speed = this.diameter / 2; 
	this.rise = 0; 
	this.angle = 0; 
} 

for (let i = 0; i < numberOfPieces; i++) { 
	pieces.push(new newPiece()); 
} 

function updateNewPiece(piece) { 
	piece.rotation += 0.5; 
	piece.angle += 0.01; 
	piece.rise += 0.5; 
	piece.y -= piece.speed; 
	piece.x += Math.sin(piece.angle) - 0.5 + Math.random(); 

	if (piece.y <= -20) { 
	piece.y = canvas.height + 20; 
	piece.x = Math.random() * canvas.width; 
	} 
} 

function drawNewPiece(piece) { 
	ctx.beginPath(); 
	ctx.lineWidth = piece.diameter; 
	ctx.strokeStyle = piece.color; 
	ctx.moveTo(piece.x + piece.diameter / 4, piece.y); 
	ctx.lineTo(piece.x, piece.y + piece.diameter / 4); 
	ctx.stroke(); 
	ctx.closePath(); 
} 

function animateConfetti() { 
	ctx.clearRect(0, 0, canvas.width, canvas.height); 

	pieces.forEach((piece) => { 
	updateNewPiece(piece); 
	drawNewPiece(piece); 
	}); 

	requestAnimationFrame(animateConfetti); 
} 

animateConfetti(); 
} 

const bulb1 = document.querySelector(".bulb1"); 
const bulb2 = document.querySelector(".bulb2"); 
const bulb3 = document.querySelector(".bulb3"); 
const bulb4 = document.querySelector(".bulb4"); 
const blinkBulb1 = () => { 
bulb1.classList.toggle("bulb1"); 
}; 
setInterval(blinkBulb1, 500); 

const blinkBulb2 = () => { 
bulb2.classList.toggle("bulb2"); 
}; 
setInterval(blinkBulb2, 800); 

const blinkBulb3 = () => { 
bulb3.classList.toggle("bulb3"); 
}; 
setInterval(blinkBulb3, 300); 

const blinkBulb4 = () => { 
bulb4.classList.toggle("bulb4"); 
}; 
setInterval(blinkBulb4, 400); 

function slideDigit(id, value, lastValue) { 
console.log("slide"); 
const digit = document.getElementById(id); 
if (value !== lastValue) { 
	digit.style.transform = "translateY(-100%)"; // Move digit upwards 
	digit.style.opacity = "0"; // Fade out current digit 

	setTimeout(() => { 
	digit.style.transform = "translateY(0)"; 
	// Slide back to original position 
	digit.textContent = value; // Set new digit value 
	digit.style.opacity = "1"; // Fade in new digit 
	}, 300); // Adjust this timeout as needed 
} 
} 
