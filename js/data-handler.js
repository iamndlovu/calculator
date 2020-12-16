/*
let current = '0',
    contArray = [];
*/
let calculator = {
  state: {
    firstNum: false,
    solveClick: false,
    current: 'first'
  },
  data: {
    firstNum: '',
    operator: '',
    secondNum: '',
    result: ''
  },

  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },
};