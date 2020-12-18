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
  },

  backspace() {
    if (this.state.current == 'first') {
      let temp = '';
      for (let i = 0; i < this.data.firstNum.length - 1; i++ ) {
        temp += this.data.firstNum[i];
      }
      this.data.firstNum = temp;
      //problemDisplay.textContent = this.data.firstNum;
    } else {
      if (this.data.secondNum.length == 0 && this.data.operator != '') {
        this.data.operator = '';
        this.state.current = 'first';
      } else {
        let temp1 = '';
        for (let i = 0; i < this.data.secondNum.length - 1; i++ ) {
          temp1 += this.data.secondNum[i];
        }
        this.data.secondNum = temp1;
      }
    }
    let tempstore = '';
    for (let i = 0; i <  problemDisplay.textContent.length - 1; i++) {
        tempstore += problemDisplay.textContent[i];
    }
    problemDisplay.textContent = tempstore;
    this.solve();
    answerSDisplay.textContent = `= ${calculator.data.result}`;
  }
};