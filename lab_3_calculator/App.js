/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [input, setInput] = useState('0');

  const [buffer, setBuffer] = useState(0);

  const [operationId, setOperationId] = useState(-1);

  const setBufferAndOperationId = (buff, opId) => {
    setBuffer(buff);
    setOperationId(opId);
    setInput('0');
  };
  const calculate = () => {
    let result = 0;
    switch (operationId) {
      case 0:
        result = Number(buffer) / Number(input);
        break;
      case 1:
        result = Number(buffer) * Number(input);
        break;
      case 2:
        result = Number(buffer) - Number(input);
        break;
      case 3:
        result = Number(buffer) + Number(input);
        break;
      default:
        break;
    }
    setInput(result);
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <View style={styles.numbersView}>
        <Text style={styles.numbersText}>{input}</Text>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.acButton}
            onPress={() => setInput('0')}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emptyButton} />
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setBufferAndOperationId(input, 0)}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '7' : input + '7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '8' : input + '8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '9' : input + '9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setBufferAndOperationId(input, 1)}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '4' : input + '4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '5' : input + '5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '6' : input + '6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setBufferAndOperationId(input, 2)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '1' : input + '1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '2' : input + '2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => setInput(input == '0' ? '3' : input + '3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setBufferAndOperationId(input, 3)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.zeroButton}
            onPress={() => setInput(input == '0' ? '0' : input + '0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberButton}>
            <Text style={styles.buttonText}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => calculate()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848',
  },
  keyboardContainer: {
    flex: 0.75,
  },
  rowContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  numbersView: {
    flex: 0.25,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  numbersText: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 100,
    fontWeight: '100',
  },
  acButton: {
    backgroundColor: '#808080',
    flexDirection: 'row',
    height: 100,
    flex: 0.25,
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: '300',
  },
  emptyButton: {
    backgroundColor: '#808080',
    flexDirection: 'row',
    height: 100,
    flex: 0.5,
  },
  actionButton: {
    backgroundColor: '#CCCC00',
    flexDirection: 'row',
    height: 100,
    flex: 0.25,
    justifyContent: 'center',
  },
  numberButton: {
    backgroundColor: '#A0A0A0',
    flexDirection: 'row',
    height: 100,
    flex: 0.25,
    justifyContent: 'center',
  },
  zeroButton: {
    backgroundColor: '#A0A0A0',
    flexDirection: 'row',
    height: 100,
    flex: 0.5,
    justifyContent: 'space-around',
  },
});

export default App;
