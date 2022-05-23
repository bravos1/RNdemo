import React, {useCallback, useRef, useState} from 'react';
import {Box, Text, Modal, Button, FormControl, Input} from 'native-base';
import * as testVideo from '../assets/video';
import {PermissionsAndroid, StyleSheet} from 'react-native';
import {
  zip,
  unzip,
  unzipAssets,
  subscribe,
  zipWithPassword,
  unzipWithPassword,
} from 'react-native-zip-archive';
import RNFS from 'react-native-fs';

import CalendarPicker from 'react-native-calendar-picker';
const videoDemo = () => {
  const [showModal, setShowModal] = useState(true);

  const onDateChange = (res: any) => {
    console.log('💫 ~ BRAVO: ', res);
  };

  // 权限获取
  const checkReadPermission = useCallback(async () => {
    const readGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    const wreatGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    return readGranted === 'granted' && wreatGranted === 'granted';
  }, []);

  const event = async () => {
    await checkReadPermission();
    const targetPath = `${RNFS.DocumentDirectoryPath}/`;
    const sourcePath = `${RNFS.DocumentDirectoryPath}/update.bin`;
    const password = 'urexcvv9frewsd32';

    unzipWithPassword(sourcePath, targetPath, password)
      .then(path => {
        console.log(`unzip completed at ${path}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const downloadFile = () => {
    // 升级文件下载
    console.log('💫 ~ 开始文件下载');
    const downloadDest = `${RNFS.DocumentDirectoryPath}/.zip`;
    const formUrl = 'http://files.cnblogs.com/zhuqil/UIWebViewDemo.zip';

    const options = {
      fromUrl: formUrl,
      toFile: downloadDest,
      background: true,
      begin: (res: {contentLength: number}) => {
        console.log(
          'contentLength:',
          (res.contentLength / 1024 / 1024).toFixed(3),
          'M',
        );
      },
      progress: (res: {bytesWritten: number; contentLength: number}) => {
        const pro = res.bytesWritten / res.contentLength;
        console.log('💫 ~ pro', pro.toFixed(2));
      },
    };
    try {
      const ret = RNFS.downloadFile(options);
      ret.promise
        .then(res => {
          console.log('success', res);
          console.log('file://' + downloadDest);
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (e) {
      console.log('💫 ~ error', e);
    }
  };
  // 按钮事件

  return (
    <Box>
      <Button onPress={event}>zip</Button>
      <Button onPress={downloadFile}>downloadFile</Button>
      {/* <Button shadow={2} onPress={() => setShowModal(true)}>
        Button
      </Button> */}

      <CalendarPicker onDateChange={onDateChange} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="800" height={500}>
          <Modal.Body></Modal.Body>

          <Modal.Footer
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}>
              Cancel
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}>
              Save
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default videoDemo;

const styles = StyleSheet.create({});
