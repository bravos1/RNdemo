import React from 'react'
import { Box, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default function Timeline() {

    return (
        <Box style={styles.timelineWrapper}>

        </Box>
    )
}

const styles = StyleSheet.create({
    timelineWrapper: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 440,
        height: 800,
        backgroundColor: '#007232'
    },
})