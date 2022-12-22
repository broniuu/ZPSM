import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState} from 'react';

const Result = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.nick}</Text>
    <Text>{item.score}</Text>
    <Text>{item.total}</Text>
    <Text>{item.type}</Text>
    <Text>{item.createdOn}</Text>
  </View>
);

const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getResultsFromApi = async () => {
    try {
      let response = await fetch('https://tgryl.pl/quiz/results');
      let responseJson = await response.json();
      setResults(responseJson);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResultsFromApi().then();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Result item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Results;
