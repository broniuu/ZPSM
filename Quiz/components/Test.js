/* eslint-disable react/react-in-jsx-scope */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import _ from 'lodash';
const Test = ({route, navigation}) => {
  const {taskNumber} = route.params;
  let tasks = [
    {
      question:
        'Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?',
      answers: [
        {
          content: 'LUCJUSZ CYNNA',
          isCorrect: true,
        },
        {
          content: 'JULIUSZ CEZAR',
          isCorrect: false,
        },
        {
          content: 'LUCJUSZ MURENA',
          isCorrect: false,
        },
        {
          content: 'MAREK KRASSUS',
          isCorrect: false,
        },
      ],
      duration: 30,
    },
    {
      question: 'W którym roku zaczęła się II Wojna Światowa?',
      answers: [
        {
          content: '2001',
          isCorrect: true,
        },
        {
          content: '1939',
          isCorrect: false,
        },
        {
          content: '1914',
          isCorrect: false,
        },
        {
          content: '1920',
          isCorrect: false,
        },
      ],
      duration: 30,
    },
  ];
  let [questionNumber, setQuestionNumber] = useState(0);
  const toggleQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const renderQuestion = task => {
    let answers = task.answers;
    return (
      <View>
        <Text>{task.question}</Text>
        <Text>{answers[0].content}</Text>
        <FlatList
          data={answers}
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
          onPress={() => toggleQuestion()}>
          <Text>{answer.content}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return renderQuestion(tasks[questionNumber]);
};


let styles = StyleSheet.create({
  question: {
    fontWeight: '600',
  },
  answer: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Test;
