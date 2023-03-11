import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ALTURA_GREEN} from '../../constants/colors';
const BUTTON_SIZE = 80;
const NUMBER_PAD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['', 0, '<<'],
];

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: ALTURA_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  numberPad: {
    width: '75%',
    marginHorizontal: 20,
    alignSelf: 'center',
  },
});

type Props = {
  onPress: (value: string | number) => void;
};
const NumberPad = ({onPress}: Props) => {
  return (
    <View style={styles.numberPad} testID="number-pad-component">
      {NUMBER_PAD.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((value, colIndex) => {
            const buttonStyle = [
              styles.button,
              value === '' && {backgroundColor: 'transparent'},
            ];

            return (
              <TouchableOpacity
                testID={`number-pad-button-${value}`}
                key={colIndex}
                style={buttonStyle}
                onPress={() => onPress(value)}>
                <Text style={styles.num}>{value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};
export default NumberPad;
