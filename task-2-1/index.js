const startButton = document.getElementById('start');

const numberInput = document.getElementById('number');
const nDividerInput = document.getElementById('ndivider');
const mDividerInput = document.getElementById('mdivider');

const resultContainer = document.getElementById('result');

startButton.addEventListener('click', handleStartButtonClick);

function handleStartButtonClick() {
  resultContainer.innerHTML = null;

  for (let i = 1; i <= numberInput.value; i++) {
    const row = document.createElement('p');
    row.textContent = checkNumber(i, nDividerInput.value, mDividerInput.value);
    resultContainer.append(row);
  }
}

function checkNumber(number, n, m) {
  if (number % n === 0 && number % m === 0) return 'alterweb';
  if (number % n === 0) return 'alter';
  if (number % m === 0) return 'web';
  return number;
}
