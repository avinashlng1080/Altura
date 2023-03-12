import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    if (pin.length > 5) {
      //todo
      // 1. create a database to store the PIN
      // 2. Store PIN locally in database and ensure the stacks auto-switch to Home screen
    }
  }, [pin]);

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
