import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const FaceDemo = () => {
  const devices = useCameraDevices()
  const device: any = devices.front


  const requestCameraPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: '申请相机权限',
          message: '不给权限不干活',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('💫 ~ test: 1')
      } else {
        console.log("💫 ~ 获取权限失败")
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    requestCameraPermissions()
  }, [])

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text style={{ color: "white" }}>FaceDemo</Text>
      {
        device && <Camera
          style={styles.absoluteFill}
          device={device}
          isActive={true}
        />
      }
    </View>
  )
}
const styles = StyleSheet.create({
  absoluteFill: {
    width: 300,
    height: 300,
    marginTop: "10%",
    alignSelf: "center",
  }
})
export default FaceDemo