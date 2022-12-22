/* eslint-disable react/react-in-jsx-scope */
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import _ from 'lodash';
const Test = ({route, navigation}) => {
  const {testId, numberOfTasks} = route.params;
  const [taskNumber, setTaskNumber] = useState(0);
  const [test, setTest] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  const getTestFromApi = async id => {
    try {
      const url = 'https://tgryl.pl/quiz/test/' + id;
      let response = await fetch(url);
      let responseJson = await response.json();
      setTest(responseJson);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postPayload = async payload => {
    return await fetch('http://tgryl.pl/quiz/result', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };

  useEffect(() => {
    getTestFromApi(testId).then();
  }, []);

  const handleQuestion = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setTaskNumber(taskNumber + 1);
  };

  const renderPayload = payload => {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultProp}>Nick: {payload.nick}</Text>
          <Text style={styles.resultProp}>Score: {payload.score}</Text>
          <Text style={styles.resultProp}>Total: {payload.total}</Text>
          <Text style={styles.resultProp}>Type: {payload.type}</Text>
        </View>
      </View>
    );
  };

  const renderQuestion = task => {
    if (taskNumber >= numberOfTasks) {
      let payload = {
        nick: 'Adamson',
        score: score,
        total: numberOfTasks,
        type: test.tags[0],
      };
      postPayload(payload).then();
      return renderPayload(payload);
    }
    return (
      <View>
        <Text style={styles.question}>{task.question}</Text>
        <FlatList
          data={task.answers}
          renderItem={renderAnswer}
          keyExtractor={answer => answer.content}
        />
      </View>
    );
  };

  const renderAnswer = answer => {
    return (
      <View>
        <TouchableOpacity
          style={styles.answer}
          onPress={() => handleQuestion(answer.item.isCorrect)}>
          <Text>{answer.item.content}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    renderQuestion(test.tasks[taskNumber])
  );
};

let styles = StyleSheet.create({
  question: {
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
  },
  answer: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  result: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
  resultProp: {
    padding: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Test;
