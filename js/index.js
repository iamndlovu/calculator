const numberBtns = document.querySelector('#numbers'),
      problemDisplay = document.querySelector('.problem-display'),
      answerSDisplay = document.querySelector('.answer-display');

numberBtns.addEventListener('click', handleNumClick);

function  handleNumClick(e) {
  let value = e.target.value;
  if (current == '0') {
    if (value != '.') current = '';
    else current = '0'
  }

  current += String(value);
  problemDisplay.textContent = current;
}