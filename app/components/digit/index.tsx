import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  ALTURA_BORDER,
  ALTURA_SHADE,
  ALTURA_WHITE,
} from '../../constants/colors';

const SIZE = 35;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
  isSelected: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: ALTURA_BORDER,
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
        {backgroundColor: !isSelected ? ALTURA_SHADE : ALTURA_WHITE},
        isSelected && styles.isSelected,
      ]}
    />
  );
};

export default Digit;
