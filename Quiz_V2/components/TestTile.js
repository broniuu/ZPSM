import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';

const TestTile = ({route, navigation}) => {
  const {name, description, id, numberOfTasks} = route;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Test', {testId: id, numberOfTasks: numberOfTasks})}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

let styles = StyleSheet.create({
  name: {
    color: '#060606',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  button: {
    backgroundColor: '#a6a6a6',
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
});

export default TestTile;
