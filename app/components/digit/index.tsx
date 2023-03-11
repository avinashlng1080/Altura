import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ALTURA_BORDER, ALTURA_SHADE} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

type Props = {
  isSelected: boolean;
};
const Digit = ({isSelected}: Props) => {
  return (
    <View
      testID="digit-component"
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? ALTURA_SHADE : ALTURA_BORDER,
        },
      ]}
    />
  );
};

export default Digit;
