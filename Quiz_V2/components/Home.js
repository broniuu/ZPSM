import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import TestTile from './TestTile';
import _ from 'lodash';
import {useEffect, useState} from 'react';

const Home = ({navigation}) => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTestsFromApi = async () => {
    try {
      let response = await fetch('https://tgryl.pl/quiz/tests');
      let responseJson = await response.json();
      setTests(responseJson);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTestsFromApi().then();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {_.map(tests, tile => (
          <TestTile route={tile} navigation={navigation} />
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
