import {useState} from 'react';
import calculator from '../util/calculator';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Row from './Row';
import ButtonPortrait from './ButtonPortrait';

const Portrait = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(props.currentValue).toLocaleString()}
        </Text>
        <Row>
          <ButtonPortrait
            text="C"
            theme="secondary"
            onPress={() => props.handleTap('clear')}
          />
          <ButtonPortrait
            text="+/-"
            theme="secondary"
            onPress={() => props.handleTap('posneg')}
          />
          <ButtonPortrait
            text="%"
            theme="secondary"
            onPress={() => props.handleTap('percentage')}
          />
          <ButtonPortrait
            text="/"
            theme="accent"
            onPress={() => props.handleTap('operator', '/')}
          />
        </Row>

        <Row>
          <ButtonPortrait
            text="7"
            onPress={() => props.handleTap('number', 7)}
          />
          <ButtonPortrait
            text="8"
            onPress={() => props.handleTap('number', 8)}
          />
          <ButtonPortrait
            text="9"
            onPress={() => props.handleTap('number', 9)}
          />
          <ButtonPortrait
            text="x"
            theme="accent"
            onPress={() => props.handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <ButtonPortrait
            text="4"
            onPress={() => props.handleTap('number', 4)}
          />
          <ButtonPortrait
            text="5"
            onPress={() => props.handleTap('number', 5)}
          />
          <ButtonPortrait
            text="6"
            onPress={() => props.handleTap('number', 6)}
          />
          <ButtonPortrait
            text="-"
            theme="accent"
            onPress={() => props.handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <ButtonPortrait
            text="1"
            onPress={() => props.handleTap('number', 1)}
          />
          <ButtonPortrait
            text="2"
            onPress={() => props.handleTap('number', 2)}
          />
          <ButtonPortrait
            text="3"
            onPress={() => props.handleTap('number', 3)}
          />
          <ButtonPortrait
            text="+"
            theme="accent"
            onPress={() => props.handleTap('operator', '+')}
          />
        </Row>

        <Row>
          <ButtonPortrait
            text="0"
            size="double"
            onPress={() => props.handleTap('number', 0)}
          />
          <ButtonPortrait
            text="."
            onPress={() => props.handleTap('number', '.')}
          />
          <ButtonPortrait
            text="="
            theme="accent"
            onPress={() => props.handleTap('equal')}
          />
        </Row>
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

export default Portrait;
