import React from 'react';
import ScreenBrightness from 'react-native-screen-brightness';
import {View, Text} from 'react-native';

const Demo = () => {
  ScreenBrightness.setBrightness(0.5); // between 0 and 1

  ScreenBrightness.getBrightness().then((brightness: any) => {
    console.log('brightness', brightness);
  });

  return (
    <View>
      <Text>Demo</Text>
    </View>
  );
};

export default Demo;
