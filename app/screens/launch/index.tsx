import JailMonkey from 'jail-monkey';
import React, {useEffect, useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import {createUser} from '../../actions/user';
import Container from '../../components/container';
import Digits from '../../components/digits';
import NumberPad from '../../components/number_pad';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  hint: {
    fontSize: 16,
    marginBottom: 30,
  },
});

const Launch = () => {
  const [pin, setPin] = useState('');

  // To be tested on physical device - it returns true on emulator
  const isJailBroken = useMemo(() => JailMonkey.isJailBroken(), []);
  const handlePress = (value: string | number) => {
    switch (true) {
      case value === '': {
        break;
      }
      case pin.length <= 5: {
        setPin(pin + value);
        break;
      }
      case value === '<<': {
        setPin(pin.slice(0, -1));
        break;
      }
    }
  };

  useEffect(() => {
    if (pin.length > 5 && !isJailBroken) {
      createUser(true);
      //todo: store PIN in keychain
    }
  }, [pin, isJailBroken]);

  useEffect(() => {
    // verify if this is a trusted device - there are so many ways to test - we won't do all of them for the demo project - https://github.com/GantMan/jail-monkey#api

    if (isJailBroken) {
      const reason = JailMonkey.jailBrokenMessage() || 'Not available';
      const debugInfo =
        JailMonkey.androidRootedDetectionMethods || 'Not available';

      return Alert.alert(
        'Jailbroken devices are not supported',
        `
        Reason: ${reason}
        DebugInfo: ${JSON.stringify(debugInfo)}
        `,
        [
          {
            text: 'Exit app',
            style: 'destructive',
          },
        ],
        {cancelable: false},
      );
    }
  }, [isJailBroken]);

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.hint}>
          So as to further secure your data on this device
        </Text>
        <Digits currentLength={pin.length} />
        <NumberPad onPress={handlePress} />
      </View>
    </Container>
  );
};

export default Launch;
