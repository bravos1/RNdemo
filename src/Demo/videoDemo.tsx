import React, { useRef } from 'react'
import { Box, Text } from 'native-base'
import Video from 'react-native-video';
import * as testVideo from "../assets/video"
import { StyleSheet } from 'react-native';
const videoDemo = () => {
  const videoRef = useRef(null)

  return (
    <Box>
    <Text>sss</Text>

    </Box>
  )
}

export default videoDemo

var styles = StyleSheet.create({
  backgroundVideo: {
    width:200,
    height:200,
  },
});