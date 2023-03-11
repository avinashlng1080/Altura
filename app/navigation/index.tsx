import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {ALTURA_PURPLE} from '../constants/colors';
import Home from '../screens/home';
import Launch from '../screens/launch';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeRoute = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const isSignIn = () => {
  //todo: check if user is signed in
  return false;
};
export const Routes = () => {
  const isUserSignedIn = isSignIn();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserSignedIn ? (
          <Stack.Screen name="Home" component={HomeRoute} />
        ) : (
          <Stack.Screen
            name="Launch"
            component={Launch}
            options={{
              title: 'Create a PIN',
              headerStyle: {
                backgroundColor: ALTURA_PURPLE,
              },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
