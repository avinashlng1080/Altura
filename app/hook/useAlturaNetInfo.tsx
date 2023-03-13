import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

const useAlturaNetInfo = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(Boolean(state.isConnected));

      if (!state.isConnected) {
        console.log('Not Connected');
        Alert.alert(
          'No Internet Connection',
          'Please check your internet connection and try again.',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {isConnected};
};

export default useAlturaNetInfo;
