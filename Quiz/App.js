import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Results from './components/Results';
import Test from './components/Test';
import StackNavigator from './navigators/StackNavigator';
import TestTiles from './components/TestTiles';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
  const testTiles = [
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

  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{title: 'Home Page'}}
        />
        <Drawer.Screen name="Results" component={Results} />
        {/*{_.map(tiles, tile => {*/}
        {/*  <Drawer.Screen*/}
        {/*    name="Test"*/}
        {/*    component={TestTile}*/}
        {/*    initialParams={{params: tile.text}}*/}
        {/*  />;*/}
        {/*})}*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
