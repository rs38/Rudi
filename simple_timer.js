// simple timer increase int value only once per second


let timerInterval = 1000; // 1 second
let weight = 63;
document.getElementById("grammInput").value = weight;
let timerid;

init();

function updateInput() {
  weight = parseInt( document.getElementById("grammInput").value);
  seconds = 2 * (weight )
 
  document.getElementById("timestr").innerHTML = formatTime(seconds);
  document.getElementById("secs").innerHTML = seconds;

}

function init() {
 
  updateInput();

  //event listeners

  const startButton = document.getElementById("startButton");
  const grammInput = document.getElementById("grammInput");
  const soundButton = document.getElementById("soundButton");
  
  startButton.addEventListener("click", function() {
    updateInput();
    timerid = setInterval(updateTimer, timerInterval);
  });

  soundButton.addEventListener("click", function() {
   playsound();
  });

  grammInput.addEventListener("change", function() {

    updateInput();
  });

}

function updateTimer() {
  seconds--;
  
   document.getElementById("secs").innerHTML = seconds;
  document.getElementById("timestr").innerHTML = formatTime(seconds);

  if (seconds <= 0) {
    playsound();
    clearInterval(timerid);
  }

}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}


function playsound() {
  const alarmSound = document.getElementById("alarmSound");
  //play 5 times and pause 1 second
  for (let i = 0; i < 5; i++) { 
      alarmSound.play(); 
      sleep(1000);
  }
} 