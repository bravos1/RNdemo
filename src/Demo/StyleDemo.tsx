import { View,  StyleSheet,DeviceEventEmitter} from 'react-native';
import React, { useEffect } from 'react';
import { Button } from 'native-base';
import { deviceUtils } from '../service/utils';

const StyleDemo = () => {

	useEffect(() => {
		const eventListener = DeviceEventEmitter.addListener('EventReminder', () => {
			console.log('sasss');
		});
		return () => {
			eventListener.remove();
		};
	}, []);

	const show = async () => { 
		const res = await deviceUtils.showBar();
		console.log('showFn');
	};

	const hiden = async () => { 
		const res = await deviceUtils.showBar();
		console.log('hidenFn');
	};
	const popEvent = async () => { 
		// deviceUtils.runCommand('input keyevent 223');
	};
	const commandEvent = async () => { 
		// deviceUtils.runCommand('input keyevent 223');
	};

	return (
		<View style={{flex:1}}>
			<View style={Styles.box1}/>
			<Button onPress={show} style={Styles.box1} >show</Button>
			<Button onPress={hiden} style={Styles.box1} >hiden</Button>

			<Button onPress={popEvent} style={Styles.box1} >popEvent</Button>
			<Button onPress={commandEvent} style={Styles.box1} >commandEvent</Button>

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