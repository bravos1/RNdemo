/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';

const Demo = () => {
  const test = () => {
    console.log('测试');
  };

  return (
    <View>
      <Text style={{color: 'white'}}>息屏控制</Text>
      <Button onPress={test} title="息屏控制 测试" />
    </View>
  );
};

export default Demo;
