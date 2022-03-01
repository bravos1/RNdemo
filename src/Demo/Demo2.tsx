/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Demo2() {
  return (
    <View
      style={{flex: 1, justifyContent: 'flex-end', backgroundColor: '#24292e'}}>
      <Text>demo2</Text>
      <View style={{width: 200, height: 200, justifyContent: 'space-between'}}>
        <Button onPress={() => console.log('test:')} title="test" />
        <Button onPress={() => console.log('test:')} title="test" />
      </View>
    </View>
  );
}
