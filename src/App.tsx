import React from 'react';
import {StyleSheet, View} from 'react-native';

import * as Demo from './Demo';

export default function index() {
  return (
    <View style={styles.container}>
      <Demo.Demo1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flex: 1,
  },
});
