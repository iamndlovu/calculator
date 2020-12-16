const numberBtns = document.querySelector('#numbers'),
      problemDisplay = document.querySelector('.problem-display'),
      answerSDisplay = document.querySelector('.answer-display');

numberBtns.addEventListener('click', handleNumClick);

function  handleNumClick(e) {
  let value = e.target.value;
  if (calculator.state.current == 'first') {
    calculator.data.firstNum += String(value);
    calculator.state.firstNum = true;
    problemDisplay.textContent = calculator.data.firstNum;
    console.log(calculator);
  } else {
    calculator.data.secondNum += String(value);
    problemDisplay.textContent = problemDisplay.textContent + String(value);
  }
}
