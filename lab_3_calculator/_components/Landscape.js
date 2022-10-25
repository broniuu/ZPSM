import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonLandscape from './buttons/ButtonLandscape';
import Row from './Row';
import calculator, {calculateOneNumber} from './Calculator';
import {calculateTwoNumbers} from './Calculator';

const Landscape = () => {
  const [firstValue, setFirstValue] = useState('0');
  const [buffer, setBuffer] = useState('0');
  const [operator, setOperator] = useState('null');
  const handleTap = (type, value) => {
    switch (type) {
      case 'clear':
        setFirstValue('0');
        setBuffer('0');
        setOperator('null');
        break;
      case 'number':
        joinOrChangeFirstValue(value);
        break;
      case 'operator':
        setBufferAndOperator();
        break;
      case 'unary-operator':
        setOperator(value);
        calculateOneNumber(firstValue, operator);
        break;
      case 'equals':
        calculateTwoNumbers(firstValue, buffer, operator);
        break;
    }
  };
  const joinOrChangeFirstValue = value => {
    setFirstValue(firstValue === '0' ? value : firstValue + value);
  };

  const setBufferAndOperator = (buff, opr) => {
    setFirstValue('0');
    setBuffer(buff);
    setOperator(opr);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.value}>{firstValue}</Text>
        <Row>
          <ButtonLandscape text={'y'} onPress={() => handleTap()} />
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape text={'AC'} onPress={() => handleTap('clear')} />
          <ButtonLandscape text={'+/-'} onPress={() => handleTap('posneg')} />
          <ButtonLandscape text={'%'} onPress={() => handleTap('percentage')} />
          <ButtonLandscape
            text={'/'}
            onPress={() => handleTap()}
            theme={'accent'}
          />
        </Row>
        <Row>
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape
            text={'7'}
            onPress={() => handleTap('number', '7')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'8'}
            onPress={() => handleTap('number', '8')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'9'}
            onPress={() => handleTap('number', '9')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'x'}
            onPress={() => handleTap()}
            theme={'accent'}
          />
        </Row>
        <Row>
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape
            text={'4'}
            onPress={() => handleTap('number', '4')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'5'}
            onPress={() => handleTap('number', '5')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'6'}
            onPress={() => handleTap('number', '6')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'-'}
            onPress={() => handleTap()}
            theme={'accent'}
          />
        </Row>
        <Row>
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape
            text={'1'}
            onPress={() => handleTap('number', '1')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'2'}
            onPress={() => handleTap('number', '2')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'3'}
            onPress={() => handleTap('number', '3')}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'+'}
            onPress={() => handleTap()}
            theme={'accent'}
          />
        </Row>
        <Row>
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape text={'a/b'} onPress={() => handleTap()} />
          <ButtonLandscape
            text={'0'}
            onPress={() => setFirstValue('0')}
            theme={'secondary'}
            size={'double'}
          />
          <ButtonLandscape
            text={'a/b'}
            onPress={() => handleTap()}
            theme={'secondary'}
          />
          <ButtonLandscape
            text={'='}
            onPress={() => handleTap()}
            theme={'accent'}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});
export default Landscape;
