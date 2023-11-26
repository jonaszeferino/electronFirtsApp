let count = 0;
const counterButton = document.getElementById('counterButton');
const resetButton = document.getElementById('resetButton');
const counterValue = document.getElementById('counterValue');

counterButton.addEventListener('click', () => {
  count++;
  counterValue.textContent = `Contagem: ${count}`;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counterValue.textContent = `Contagem: ${count}`;
});
