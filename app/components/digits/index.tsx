import React from 'react';
import {StyleSheet, View} from 'react-native';

import Digit from '../digit';

const SELECTED_DIGITS = Array(6).fill(false);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 35,
    width: '75%',
    justifyContent: 'space-between',
  },
});

type Props = {
  currentLength: number;
};
const Digits = ({currentLength}: Props) => {
  return (
    <View testID="digits-component" style={styles.container}>
      {SELECTED_DIGITS.map((_, index) => {
        return (
          <Digit
            isSelected={currentLength - 1 < index}
            key={`digit-${index}`}
          />
        );
      })}
    </View>
  );
};

export default Digits;
