import React, { useCallback, useState } from 'react';
import { Box, Button } from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';
import { deviceUtils } from '../service/utils';

import SystemNavigationBar from 'react-native-system-navigation-bar';

const videoDemo = () => {
	const [isHiden, setIsHiden] = useState(true);



	const RNHiden = useCallback(async () => {
		setIsHiden(!isHiden);
		StatusBar.setHidden(isHiden, 'fade');
	}, [isHiden]);

	const AndroidHiden = useCallback(async () => {
		setIsHiden(!isHiden);
		const res = await deviceUtils.setUIVisible(isHiden);
		console.log('💫 ~ res', res);
	}, [isHiden]);

	const show = useCallback(async () => {
		// SystemNavigationBar.fullScreen(isHiden);
		SystemNavigationBar.fullScreen(false);
		hiden();
	}, [isHiden]);

	const hiden = useCallback(async () => {
		// setIsHiden(!isHiden)
		// SystemNavigationBar.fullScreen(isHiden);
		const res = await SystemNavigationBar.stickyImmersive();
	}, [isHiden]);

	return (
		<Box style={{ width: '100%', justifyContent: 'space-around', height: '100%' }}>
			<Button onPress={AndroidHiden}>Android 隐藏状态栏</Button>
			<Button onPress={show}>显示</Button>
			<Button onPress={hiden}>RN 隐藏状态栏</Button>
		</Box>
	);
};

export default videoDemo;

const styles = StyleSheet.create({});
