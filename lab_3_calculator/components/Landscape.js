import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Row from './Row';
import ButtonLandscape from './ButtonLandscape';
import _ from 'lodash';

const Landscape = props => {
  const firstRow = [
    {
      text: 'sqrt',
      theme: 'secondary',
      onPress: () => props.handleTap('operator', 'sqrt'),
    },
    {
      text: 'x!',
      theme: 'secondary',
      onPress: () => props.handleTap('posneg'),
    },
    {
      text: 'AC',
      theme: 'secondary',
      onPress: () => props.handleTap('clear'),
    },
    {
      text: '+/-',
      theme: 'secondary',
      onPress: () => props.handleTap('posneg'),
    },
    {
      text: '%',
      theme: 'secondary',
      onPress: () => props.handleTap('percentage'),
    },
    {
      text: '/',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '/'),
    },
  ];
  const secondRow = [
    {
      text: 'C',
      theme: 'secondary',
      onPress: () => props.handleTap('clear'),
    },
    {
      text: '+/-',
      theme: 'secondary',
      onPress: () => props.handleTap('posneg'),
    },
    {
      text: '7',
      onPress: () => props.handleTap('number', 7),
    },
    {
      text: '8',
      onPress: () => props.handleTap('number', 8),
    },
    {
      text: '9',
      onPress: () => props.handleTap('number', 9),
    },
    {
      text: 'x',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '*'),
    },
  ];
  const thirdRow = [
    {
      text: 'C',
      theme: 'secondary',
      onPress: () => props.handleTap('clear'),
    },
    {
      text: '+/-',
      theme: 'secondary',
      onPress: () => props.handleTap('posneg'),
    },
    {
      text: '4',
      onPress: () => props.handleTap('number', 4),
    },
    {
      text: '5',
      onPress: () => props.handleTap('number', 5),
    },
    {
      text: '6',
      onPress: () => props.handleTap('number', 6),
    },
    {
      text: '-',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '-'),
    },
  ];
  const fourthRow = [
    {
      text: 'C',
      theme: 'secondary',
      onPress: () => props.handleTap('clear'),
    },
    {
      text: '+/-',
      theme: 'secondary',
      onPress: () => props.handleTap('posneg'),
    },
    {
      text: '1',
      onPress: () => props.handleTap('number', 1),
    },
    {
      text: '2',
      onPress: () => props.handleTap('number', 2),
    },
    {
      text: '3',
      onPress: () => props.handleTap('number', 3),
    },
    {
      text: '+',
      theme: 'accent',
      onPress: () => props.handleTap('operator', '+'),
    },
  ];
  const fifthRow = [
    {
      text: 'C',
      theme: 'secondary',
      onPress: () => props.handleTap('clear'),
    },
    {
      text: '+/-',
      theme: 'secondary',
      onPress: () => props.handleTap('posneg'),
    },
    {
      text: '0',
      size: 'double',
      onPress: () => props.handleTap('number', 0),
    },
    {
      text: '.',
      onPress: () => props.handleTap('number', '.'),
    },
    {
      text: '=',
      theme: 'accent',
      onPress: () => props.handleTap('equal'),
    },
  ];
  const rows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(props.currentValue).toLocaleString()}
        </Text>
        {_.map(rows, row => (
          <Row>
            {_.map(row, button => (
              <ButtonLandscape
                size={button.size}
                theme={button.theme}
                onPress={button.onPress}
                text={button.text}
              />
            ))}
          </Row>
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
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
