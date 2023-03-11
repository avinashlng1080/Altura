import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import Container from '../../components/container';
import Digits from '../../components/digits';
import NumberPad from '../../components/number_pad';

const CodeInputScreen = () => {
  const [code, setCode] = useState('');

  const handlePress = (value: string | number) => {
    if (value === '<<') {
      setCode(code.slice(0, -1));
    } else if (code.length < 6) {
      setCode(code + value);
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.hint}>
          So as to further secure your data on this device
        </Text>
        <TextInput
          editable={false}
          keyboardType="number-pad"
          maxLength={6}
          secureTextEntry
          style={styles.hiddenInput}
          value={code}
        />
        <Digits currentLength={code.length} />
        <NumberPad onPress={handlePress} />
      </View>
    </Container>
  );
};

//fixme: add a scrollview for small devices

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
  hiddenInput: {
    height: 0,
    width: 0,
  },
});

export default CodeInputScreen;
