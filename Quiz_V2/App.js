import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Results from './components/Results';
import StackNavigator from './navigators/StackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
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
        />
        <Drawer.Screen name="Results" component={Results} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
