import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
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

const Results = async ({navigation}) => {
  const renderItem = ({item}) => <Result item={item} />;
  const [results, setResults] = useState([]);
  console.log(1);
  const getResultsFromApi = async () => {
    try {
      let response = await fetch('https://tgryl.pl/quiz/results.');
      let responseJson = await response.json();
      return responseJson.results;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setResults(getResultsFromApi());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
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
