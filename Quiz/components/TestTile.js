import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';

const TestTile = ({text, navigation}) => {
  let styles = StyleSheet.create({
    text: {
      color: '#060606',
      fontSize: 25,
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

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Test')}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TestTile;
