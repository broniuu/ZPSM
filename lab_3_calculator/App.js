import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Portrait from './components/Portrait';
import Landscape from './components/Landscape';

const App: () => Node = () => {
  const mexp = require('math-expression-evaluator');
  const [expression, setExpression] = useState('0');

  const handleNumber = number => {
    if (expression === '0') {
      setExpression(`${number}`);
    } else {
      setExpression(`${expression}${number}`);
    }
  };

  const handleOperator = operator => {
    switch (operator) {
      case 'log':
      case 'ln':
        if (expression === '0') {
          setExpression(`${operator}(`);
        } else {
          setExpression(`${expression}${operator}(`);
        }
        break;
      case 'sqrt':
        setExpression(`(${expression})^0.5`);
        break;
      case 'e^x':
        setExpression(`e^(${expression})`);
        break;
      case '10^x':
        setExpression(`10^(${expression})`);
        break;
      case 'e':
        if (expression === '0') {
          setExpression(`${operator}`);
        } else {
          setExpression(`${expression}${operator}`);
        }
        break;
      case 'x^2':
        setExpression(`(${expression})^2`);
        break;
      default:
        setExpression(`${expression}${operator}`);
        break;
    }
  };

  const handleEqual = () => {
    setExpression(mexp.eval(expression));
  };

  const calculator = (type, value) => {
    switch (type) {
      case 'number':
        return handleNumber(value);
      case 'operator':
        return handleOperator(value);
      case 'equal':
        return handleEqual();
      case 'clear':
        setExpression('0');
        break;
      case 'posneg':
        setExpression(`-${expression}`);
        break;
      case 'percentage':
        setExpression(`%${expression}`);
        break;
      default:
        break;
    }
  };

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const handleTap = (type, value) => {
    calculator(type, value);
  };

  const [portrait, setPortrait] = useState(isPortrait());

  Dimensions.addEventListener('change', () => {
    setPortrait(isPortrait());
  });

  return isPortrait() === true ? (
    <Portrait currentValue={expression} handleTap={handleTap} />
  ) : (
    <Landscape currentValue={expression} handleTap={handleTap} />
  );
};

export default App;
