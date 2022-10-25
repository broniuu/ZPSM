export const calculateTwoNumbers = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '/':
      return Number(firstValue) / Number(secondValue);
    case '*':
      return Number(firstValue) * Number(secondValue);
    case '-':
      return Number(firstValue) - Number(secondValue);
    case '+':
      return Number(firstValue) + Number(secondValue);
    case 'yrootx':
      return Number(firstValue) + Number(secondValue);
    default:
      break;
  }
};

export const calculateOneNumber = (value, operator) => {
  switch (operator) {
    case '+/-':
      return Number(value);
    case '%':
      return Number(value);
    case 'x!':
      return Number(value);
    case 'ex':
      return Number(value);
    case 'ln':
      return Number(value);
    case 'e':
      return Number(value);
    case 'pi':
      return Number(value);
    case 'x!':
      return Number(value);
    case '10x':
      return Number(value);
    case 'log10':
      return Number(value);
    case 'x2':
      return Number(value);
    case 'x3':
      return Number(value);
    default:
      break;
  }
};
