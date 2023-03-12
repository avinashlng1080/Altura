import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {ALTURA_PURPLE} from '../constants/colors';
import {HOME, LAUNCH, MAIN, SETTINGS} from '../constants/screens';
import Home from '../screens/home';
import Launch from '../screens/launch';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeRoute = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name={SETTINGS}
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const isSignIn = () => {
  //todo: check if user is signed in - read from database
  // 1. check if user is signed in by querying the database
  // 2. if user is signed in, return true

  return false;
};
export const Routes = () => {
  const isUserSignedIn = isSignIn();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserSignedIn ? (
          <Stack.Screen
            component={HomeRoute}
            name={MAIN}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            component={Launch}
            name={LAUNCH}
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
