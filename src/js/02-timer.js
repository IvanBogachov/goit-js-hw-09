import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let getEL = x => document.querySelector(x);

const text = getEL('#datetime-picker');
const timerHtml = getEL('.timer');
const btnStart = getEL('button[data-start]');
const seconds = getEL('span[data-seconds]');
const minutes = getEL('span[data-minutes]');
const hours = getEL('span[data-hours]');
const days = getEL('span[data-days]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
          Notiflix.Notify.failure('Please choose a date in the future');
          btnStart.disabled = true;
      } else { 
          btnStart.disabled = false;
      }
  },
};

