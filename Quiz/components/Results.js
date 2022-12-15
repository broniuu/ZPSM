import {FlatList, SafeAreaView, Text, View, StyleSheet, StatusBar} from 'react-native';

const Result = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.nick}</Text>
    <Text>{item.score}</Text>
    <Text>{item.total}</Text>
    <Text>{item.type}</Text>
    <Text>{item.date}</Text>
  </View>
);

const Results = ({navigation}) => {
  const renderItem = ({item}) => <Result item={item} />;
  let results = [
    {
      nick: 'Marek',
      score: 18,
      total: 20,
      type: 'historia',
      date: '2022-11-22',
    },
    {
      nick: 'Adam',
      score: 18,
      total: 20,
      type: 'fizyka',
      date: '2022-05-20',
    },
    {
      nick: 'Robert',
      score: 18,
      total: 20,
      type: 'polski',
      date: '2022-05-20',
    },
  ];
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
