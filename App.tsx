import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import Container from './app/components/container';
import {ALTURA_PURPLE} from './app/constants/colors';
import {LAUNCH, MAIN} from './app/constants/screens';
import DatabaseManager from './app/database/manager';
import {subscribeUser} from './app/database/subscription/user';
import {HomeRoute} from './app/navigation';
import {queryUser} from './app/queries/user';
import Launch from './app/screens/launch';

DatabaseManager.init();

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Stack = createNativeStackNavigator();
export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [querying, setIsQuerying] = useState<boolean>(true);

  useEffect(() => {
    const userSubscription = subscribeUser(users => {
      console.log('>>>  users', {users});
      setIsLoggedIn(Boolean(users[0]));
      setIsQuerying(false);
    });
    return () => {
      userSubscription?.unsubscribe();
    };
  }, []);

  if (querying) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={ALTURA_PURPLE} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
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

export default App;
