import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Results from './components/Results';
import StackNavigator from './navigators/StackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SQLite from 'react-native-sqlite-storage';
const Drawer = createDrawerNavigator();
import NetInfo from '@react-native-community/netinfo';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState } from "react";

const App = () => {
  const db = SQLite.openDatabase({name: 'Quiz.db', createFromLocation: 1});
  let _ = require('lodash');
  const [isLoading, setLoading] = useState(true);
  const [tests, setTests] = useState([]);
  const [isConnected, setConnected] = useState(false);
  const getTests = async () => {
    try {
      const response = await fetch('https://tgryl.pl/quiz/tests');
      const json = await response.json();
      saveDatainDB(json);
      setTests(_.shuffle(json));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const saveDatainDB = data => {
    for (let i = 0; i < data.length; i++) {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO tests (id, name, description, level) VALUES (?,?,?,?)',
          [data[i].id, data[i].name, data[i].description, data[i].level],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              console.log('Saved!');
            } else {
              console.log('Save Failed');
            }
          },
        );
      });
    }
  };

  const getTestFromDatabase = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM tests', [], (tx, results) => {
        let temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        setTests(temp);
      });
    });
  };

  React.useEffect(() => {
    getTests();
    //getTestFromDatabase();
    console.log(tests);
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="StackNavigator"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="StackNavigator"
          component={StackNavigator}
          options={{title: 'Home Page'}}
          initialParams={{tests: tests}}
        />
        <Drawer.Screen name="Results" component={Results} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
