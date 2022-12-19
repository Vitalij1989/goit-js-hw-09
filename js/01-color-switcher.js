const background = document.querySelector('body');
const start = document.querySelector(`[data-start]`);
const stop = document.querySelector(`[data-stop]`);

const DELAY_TO_NEW_COLOR = 1000;
let timerColor = null;

console.log(start);

start.addEventListener('click', onBodyStart);
stop.addEventListener('click', onBodyStop);

function onBodyStart() {
  start.disabled = true;

  timerColor = setInterval(() => {
    background.style.background = getRandomHexColor();
    console.log(`Now we change color`);
  }, DELAY_TO_NEW_COLOR);
}

function onBodyStop() {
  clearInterval(timerColor);
  console.log('Colors not change');
  start.disabled = false;
}

function getRandomHexColor() {
  return '#${Math.floor(Math.random() * 16777215).toString(16)}';
}
