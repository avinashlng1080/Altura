import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {HOME, SETTINGS} from '../constants/screens';
import Home from '../screens/home';
import Settings from '../screens/settings';

const Tab = createBottomTabNavigator();
export const HomeRoute = () => {
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
