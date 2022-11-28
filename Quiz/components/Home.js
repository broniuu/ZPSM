import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import TestTile from './TestTile';
import _ from 'lodash';

const Home = () => {
  const tiles = [
    {
      text: 'lorem ipsum 1',
    },
    {
      text: 'lorem ipsum 2',
    },
    {
      text: 'lorem ipsum 3',
    },
    {
      text: 'lorem ipsum 4',
    },
  ];
  const numberOfTiles = tiles.length;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Home</Text>
        {_.map(tiles, tile => (
          <TestTile text={tile.text} numberOfTiles={numberOfTiles} />
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