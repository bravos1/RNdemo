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
    <Video source={{uri: "https://www.tootootool.com/wp-content/uploads/2020/11/SampleVideo_176x144_5mb.3gp"}}   // Can be a URL or a local file.
       style={styles.backgroundVideo} 
       repeat={true}
       resizeMode={"contain"}
       />
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