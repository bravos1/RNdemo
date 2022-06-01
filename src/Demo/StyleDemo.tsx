import { View,  StyleSheet,DeviceEventEmitter,NativeEventEmitter, NativeModules} from 'react-native';
import React, { useEffect } from 'react';
import { Button } from 'native-base';
import { deviceUtils } from '../service/utils';

const StyleDemo = () => {
	const event = new NativeEventEmitter(NativeModules.DeviceUtilsModule);

	useEffect(() => {
		const eventListener = DeviceEventEmitter.addListener('EventReminder', () => {
			console.log('sasss');
		});

		const NativeEventListener = event.addListener('EventReminder', () => {
			console.log('sasss');
		});
		return () => {
			eventListener.remove();
			NativeEventListener.remove();
		};
	}, []);

	
	const show = async () => { 
		const res = await deviceUtils.showBar();
		console.log('💫 ~ showFn', res);
	};

	const hiden = async () => { 
		const res = await deviceUtils.showBar();
		console.log('💫 ~ hidenFn', res);
	};
	// const popEvent = async () => { 
	// 	DeviceEventEmitter.emit('EventReminder','77');
	// };

	return (
		<View style={{flex:1}}>
			<View style={Styles.box1}/>
			<Button onPress={show} style={Styles.box1} >show</Button>
			<Button onPress={hiden} style={Styles.box1} >hiden</Button>
			{/* <Button onPress={popEvent} style={Styles.box1} >hiden</Button> */}

		</View>
	);
};

const Styles = StyleSheet.create({
	box1:{
		height:50,
		marginLeft:50,
		marginTop:50,
	},
	box2:{
		width:100,
		height:100,
		backgroundColor:'#D1D5DA'
	}
});

export default StyleDemo;