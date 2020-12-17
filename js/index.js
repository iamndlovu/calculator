const numberBtns = document.querySelector('#numbers'),
      problemDisplay = document.querySelector('.problem-display'),
      answerSDisplay = document.querySelector('.answer-display'),
      operators = document.querySelector('#operators');

numberBtns.addEventListener('click', handleNumClick);
operators.addEventListener('click', handleOpClick);

function  handleNumClick(e) {
  let value = e.target.value;
  if (calculator.state.current == 'first') {
    calculator.data.firstNum += String(value);
    problemDisplay.textContent = calculator.data.firstNum;
  } else {
    calculator.data.secondNum += String(value);
    if (problemDisplay.textContent === '0') problemDisplay.textContent = ''
    problemDisplay.textContent = problemDisplay.textContent + String(value);
    calculator.solve();
    answerSDisplay.textContent = `= ${calculator.data.result}`;
  }
}

function handleOpClick(e) {
  if (e.target.value != 'solve') {
    if (calculator.state.current == 'first') {
      if (calculator.data.firstNum == '') calculator.data.firstNum = '0';
    } else {
      if (calculator.data.secondNum == '') calculator.data.secondNum = '0';
      calculator.solve();
      calculator.data.firstNum = calculator.data.result;
      calculator.data.secondNum = '';
    }
    problemDisplay.textContent = problemDisplay.textContent + e.target.textContent;
    calculator.data.operator = e.target.value;
    calculator.state.current = 'second';
  } else {
    calculator.solve();
    answerSDisplay.textContent = `= ${calculator.data.result}`;
    calculator.state.current = 'first';
    calculator.data = {
      firstNum: '',
      operator: '',
      secondNum: '',
      result: ''
    }
  }
}