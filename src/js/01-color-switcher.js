const backgraund = document.querySelector('body');
const startBtr = document.querySelector('[data-start]');
const stopDtr = document.querySelector('[data-stop]');

const DileyToNewColor = 1000;
let TimerCol = null;

startBtr.addEventListener('click', onBodyStart);
stopDtr.addEventListener('click', onBodyStop);

function onBodyStart() {
  start.disaybled = true;

  TimerCol = setInterval(() => {
    backgraund.style.background = getRandomHexColor();
    console.log('Now we change color');
  }, DileyToNewColor);
}

function onBodyStop() {
  clearInterval(TimerCol);
  console.log('Color not change');
  start.disaybled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
