import Notiflix from 'notiflix';
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector(`[data-start]`);
const input = document.querySelector('#datetime-picker');
const tDays = document.querySelector(`[data-days]`);
const tHours = document.querySelector(`[data-hours]`);
const tMinutes = document.querySelector(`[data-minutes]`);
const tSeconds = document.querySelector(`[data-seconds]`);

buttonStart.addEventListener(`click`, onStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  },
};

flatpickr(input, options);

buttonStart.disabled = true;

function onStartClick() {
  const inervalId = setInterval(() => {
    let difTime = new Date(input.value) - new Date();

    console.log(difTime);
    let selectTimes = convertMs(difTime);
    console.log(selectTimes);

    if (difTime > 0) {
      onUpdateTime(selectTimes);
    } else {
      clearInterval(inervalId);
    }
  }, 1000);
}

function onUpdateTime(value) {
  const { days, hours, minutes, seconds } = value;
  tDays.textContent = days;
  tHours.textContent = hours;
  tMinutes.textContent = minutes;
  tSeconds.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
