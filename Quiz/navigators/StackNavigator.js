import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../components/Home';
import Test from '../components/Test';
import Results from '../components/Results';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import _ from 'lodash';
import {HomeStackNavigator} from './StackNavigator';
import TestTile from '../components/TestTile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Statute from '../components/Statute';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Statute" component={Statute} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
