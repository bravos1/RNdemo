import React from 'react'
import { StyleSheet } from 'react-native'
import { Box, HStack,Text } from 'native-base'

export default function MeetingRoomInfo() {
    return (
        <Box style={styles.meetingRoomInfoWrapper}>
        <Text style={styles.meetingRoomName}>
          培训会议室
        </Text>
        <HStack space={3}>
          {
            ['10人', '投影仪', '电视', '视频'].map(item =>
              (<Text style={styles.meetingRoomDevices} key={item}>{item}</Text>)
            )
          }
        </HStack>
      </Box>
    )
}
const styles = StyleSheet.create({
  meetingRoomInfoWrapper: {
    marginTop: 92
  },
  meetingRoomName: {
    marginBottom: 12
  },
  meetingRoomDevices: {
    paddingLeft: 8,
    paddingRight: 8,
    height: 28,
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
    borderColor: 'white',
    opacity: 0.6,
    borderRadius: 2
  },
})
