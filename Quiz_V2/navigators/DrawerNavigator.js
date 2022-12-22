import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import Results from '../../Quiz_V2/components/Results';
import Drawer from '@react-navigation/drawer/src/views/modern/Drawer';

const DrawerNavigator = () => {
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

export default DrawerNavigator;
