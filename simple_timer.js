// simple timer increase int value only once per second


let timerInterval = 1000; // 1 second
let weight = 63;
document.getElementById("grammInput").value = weight;
let timerid;

init();

function updateInput() {
  seconds = 2 * (weight + 114)
 
  document.getElementById("timestr").innerHTML = formatTime(seconds);
  document.getElementById("secs").innerHTML = seconds;

}

function init() {
 
  updateInput();

  //event listeners

  const startButton = document.getElementById("startButton");
  const grammInput = document.getElementById("grammInput");
  
  startButton.addEventListener("click", function() {
    weight =  parseInt( document.getElementById("grammInput").value);
    updateInput();
    timerid = setInterval(updateTimer, timerInterval);
  });

  grammInput.addEventListener("change", function() {
    weight = parseInt( document.getElementById("grammInput").value);
    updateInput();
  });

}

function updateTimer() {
  seconds--;

  if (seconds <= 0) {
    playsound();
    clearInterval(timerid);
  }

 
  document.getElementById("secs").innerHTML = seconds;
  document.getElementById("timestr").innerHTML = formatTime(seconds);
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