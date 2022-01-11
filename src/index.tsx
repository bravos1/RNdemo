import React from 'react';
import {StyleSheet, View} from 'react-native';
import Demo1 from './Demo/Demo1';
import Demo2 from './Demo/Demo2';

export default function index() {
  return (
    <View style={styles.container}>
      <Demo2 />
      <Demo1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flex: 1,
  },
});
