/*
let current = '0',
    contArray = [];
*/
let calculator = {
  state: {
    current: 'first'
  },
  data: {
    firstNum: '',
    operator: '',
    secondNum: '',
    result: ''
  },

  add(num1, num2) {
    return Number(num1) + Number(num2);
  },

  subtract(num1, num2) {
    return Number(num1) - Number(num2);
  },

  multiply(num1, num2) {
    return Number(num1) * Number(num2);
  },

  divide(num1, num2) {
    return Number(num1) / Number(num2);
  },

  solve() {
    switch (this.data.operator) {
      case 'divide':
        this.data.result = this.divide(this.data.firstNum, this.data.secondNum);
        break;
      case 'subtract':
        this.data.result = this.subtract(this.data.firstNum, this.data.secondNum);
        break;
      case 'multiply':
        this.data.result = this.multiply(this.data.firstNum, this.data.secondNum);
        break;
      case 'add':
      default:
        this.data.result = this.add(this.data.firstNum, this.data.secondNum);
    }
    if (isNaN(this.data.result)) {
      this.clear();
      this.data.result = 'Error 2'
    }
  },

  clear() {
    this.state = {
      current: 'first'
    };
    this.data = {
      firstNum: '',
      operator: '',
      secondNum: '',
      result: ''
    };
    answerSDisplay.textContent = '0';
    problemDisplay.textContent = '0';
  }
};