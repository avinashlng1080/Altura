// Home screen of the app

import React from 'react';
import {Text, View} from 'react-native';

import useAlturaNetInfo from '../../hook/useAlturaNetInfo';

const Home = () => {
  // we will alert the user each time the network is not connected
  useAlturaNetInfo();

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
