import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../Quiz_V2/components/Home';
import Test from '../../Quiz_V2/components/Test';
import Results from '../../Quiz_V2/components/Results';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import _ from 'lodash';
import {HomeStackNavigator} from './StackNavigator';
import TestTile from '../../Quiz/components/TestTile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Statute from '../../Quiz_V2/components/Statute';

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
