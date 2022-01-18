import React from 'react'
import { Box, Text } from 'native-base'
import { StyleSheet } from 'react-native'


export default function MeetingMessage() {
    return (
        <Box style={styles.meetingMessage}>
            <Text>人力资源现场面试</Text>
            <Text>黄松</Text>
            <Text>距离下一场会议开始还有 1 小时</Text>
        </Box>
    )
}

const styles = StyleSheet.create({
    meetingMessage: {
        marginTop: 20
    },
})