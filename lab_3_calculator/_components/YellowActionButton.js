import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const YellowActionButton = props => {
  return (
    <TouchableOpacity
      style={styles.actionButton}
      onPress={() => {
        props.onPress();
      }}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default YellowActionButton;
