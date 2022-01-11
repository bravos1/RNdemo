import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

import ScreenBrightness from 'react-native-screen-brightness';
import Slider from '@react-native-community/slider';

import PowerManager from '@zeemyself/react-native-powermanager';

const App = () => {
  const [brightness, setBrightness] = useState(0);

  const getBrightness = async () => {
    const res = await ScreenBrightness.getBrightness();
  };

  const onBrightnessChange = async value => {
    try {
      setBrightness(value);
      await ScreenBrightness.setBrightness(value);
    } catch (e) {
      console.log('🤨 test:', e);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>期望亮度: {brightness}</Text>

        <Slider
          maximumValue={1}
          minimumValue={0}
          step={0.1}
          value={brightness}
          onValueChange={value => onBrightnessChange(value)}
        />
        {[0, 0.5, 1].map(v => (
          <Button
            key={v}
            style={styles.button1}
            onPress={() => {
              ScreenBrightness.setBrightness(v);
            }}
            title={'变更亮度为' + v}
          />
        ))}
        <Button
          style={styles.button2}
          onPress={getBrightness}
          title="当前实际亮度">
          test
        </Button>

        <Button
          style={styles.button2}
          onPress={() => {
            console.log(PowerManager.isSupported());
          }}
          title="测试"
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
