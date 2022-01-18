import { Box, Button, HStack, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { BottomWrapper, MeetingMessage, MeetingRoomInfo, Timeline } from '../components'

const Demo = () => {
  return (
    <Box flex={1} style={styles.container}>
      <Text style={styles.companylogo}>Milesight</Text>

      <MeetingRoomInfo />

      <Text style={styles.meetingRoomStatus} fontSize={96} fontWeight={'bold'} >空闲</Text>

      <MeetingMessage />

      <BottomWrapper />

      <Timeline />

    </Box >
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 120,
    backgroundColor: '#1ba247',
  },

  companylogo: {
    position: 'absolute',
    left: 44,
    top: 20,
  },

  meetingRoomStatus: {
    marginTop: 20,
    width: 660,
    height: 136
  },

});
