let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').innerText = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById('startStop').innerText = 'Stop';
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById('startStop').innerText = 'Start';
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  display.innerText = formattedTime;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}
