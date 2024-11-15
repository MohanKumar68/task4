let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    document.getElementById('display').value = eval(displayValue);
    displayValue = document.getElementById('display').value;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}