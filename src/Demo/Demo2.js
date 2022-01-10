import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

import ScreenBrightness from 'react-native-screen-brightness';
import Slider from '@react-native-community/slider';

const App = () => {
  const [brightness, setBrightness] = useState(100);

  const getBrightness = async () => {
    const res = await ScreenBrightness.getBrightness();
    console.log('当前实际亮度值:', res);
  };

  const onBrightnessChange = async value => {
    setBrightness(value);
    const res = await ScreenBrightness.setBrightness(value);
    console.log('期望亮度值', (res * 2000).toFixed(0));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>期望亮度: {brightness}</Text>
        <Slider
          maximumValue={1}
          minimumValue={0}
          step={0.01}
          value={brightness}
          onValueChange={value => onBrightnessChange(value)}
        />

        <Button
          style={styles.button1}
          onPress={getBrightness}
          title="当前实际亮度">
          test
        </Button>

        <Button
          onPress={() => {
            ScreenBrightness.setBrightness(0);
          }}
          title="变更亮度为 0"
        />
        <Button
          onPress={() => {
            ScreenBrightness.setBrightness(0.5);
          }}
          title="变更亮度为 500"
        />
        <Button
          onPress={() => {
            ScreenBrightness.setBrightness(1);
          }}
          title="变更亮度为2000"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: 'space-evenly',
  },
});
