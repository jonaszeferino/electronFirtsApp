let seconds = 0;
let intervalId;

const timerValue = document.getElementById('timerValue');
const startTimerButton = document.getElementById('startTimer');
const resetTimerButton = document.getElementById('resetTimer');

startTimerButton.addEventListener('click', () => {
  intervalId = setInterval(() => {
    seconds++;
    timerValue.textContent = `${seconds} segundo(s)`;
  }, 1000);
});

resetTimerButton.addEventListener('click', () => {
  clearInterval(intervalId);
  seconds = 0;
  timerValue.textContent = '0 segundos';
});
