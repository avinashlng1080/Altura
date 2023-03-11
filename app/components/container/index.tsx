import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ALTURA_WHITE} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ALTURA_WHITE,
  },
  contentContainerStyle: {
    marginTop: 8,
  },
});

type SettingContainerProps = {
  children: React.ReactNode;
};
const Container = ({children}: SettingContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        alwaysBounceVertical={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;
