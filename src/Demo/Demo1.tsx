import { Box, Text } from 'native-base';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { BottomWrapper, MeetingMessage, MeetingRoomInfo, Timeline } from '../components'

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { roomStatusType } from '../type/meetingType';

const Demo = () => {

  const roomName = useSelector((state: RootState) => state.meetingRoom.roomName)
  const roomStatus = useSelector((state: RootState) => state.meetingRoom.roomStatus)
  const meetingMessage = useSelector((state: RootState) => state.meetingRoom.meetingMessage)


  const { roomThemeColor, roomStatusText } = useMemo(() => {
    let roomThemeColor = '#1ba247';
    let roomStatusText = 'noText';

    switch (roomStatus) {
      case roomStatusType.FREE:
        roomThemeColor = '#0a9a45';
        roomStatusText = 'Available';
        break;
      case roomStatusType.USING:
        roomThemeColor = '#cf3840';
        roomStatusText = 'Using';
        break;
      case roomStatusType.READY:
        roomThemeColor = '#e07f2c';
        roomStatusText = 'Ready To Use';
        break;
      default:
        break;
    }
    return { roomThemeColor, roomStatusText }
  }, [roomStatus])

  return (
    <Box flex={1} style={[styles.container, { backgroundColor: roomThemeColor }]}>
      <Text style={styles.companylogo}>Milesight</Text>

      <MeetingRoomInfo roomName={roomName} />

      <Text style={styles.meetingRoomStatus} fontSize={96} fontWeight={'bold'} >{roomStatusText}</Text>

      <MeetingMessage meetingMessage={meetingMessage} roomStatus={roomStatus} />

      <BottomWrapper roomStatus={roomStatus} />

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
