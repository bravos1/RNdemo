import React from 'react';
import {View} from 'react-native';
import Demo from './Demo';
import Demo2 from './Demo/Demo2';

export default function index() {
  return (
    <View>
      <Demo />
      <Demo2 />
    </View>
  );
}
