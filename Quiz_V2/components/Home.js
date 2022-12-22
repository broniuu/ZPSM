import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import TestTile from './TestTile';
import _ from 'lodash';

const Home = ({navigation}) => {
  const tiles = [
    {
      text: 'lorem ipsum 1',
      number: 0,
    },
    {
      text: 'lorem ipsum 2',
      number: 1,
    },
    {
      text: 'lorem ipsum 3',
      number: 2,
    },
    {
      text: 'lorem ipsum 4',
      number: 3,
    },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Home</Text>
        {_.map(tiles, tile => (
          <TestTile route={tile} navigation={navigation}/>
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});

export default Home;
