import { View,  StyleSheet} from 'react-native';
import React from 'react';
import { Button, HStack } from 'native-base';
import { deviceUtils } from '../service/utils';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const StyleDemo = () => {
	const navtiveBar = async (show: boolean) => {
		let res = null;
		// const res = await deviceUtils.getStorage();
		if(show){
			res = await deviceUtils.showBar(); 
		}else{
			res = await deviceUtils.hidenBar(); 
		} 
	};

	const rnBarContronl = async (show: boolean) => { 
		let res = null;
		if(show){
			res = await SystemNavigationBar.fullScreen(false);
		}else{
			res = await SystemNavigationBar.stickyImmersive();
		} 
	};

	const runCommand = async (value: boolean) => { 
		let res = null;
		if(value){
			res = await deviceUtils.runCommand('setprop ms.systembar.hide 1');
		}else{
			res = await deviceUtils.runCommand('setprop ms.systembar.hide 0');
		} 
		console.log('💫 ~ runCommand', res);
	};
	return (
		<View style={{flex:1}}>
			<HStack space={6} flex={1}>
				<View>
					<Button onPress={()=>navtiveBar(true)} style={Styles.box1} >广播事件 SHOW_BAR</Button>
					<Button onPress={()=>navtiveBar(false)} style={Styles.box1} >广播事件 HIDEN_BAR</Button>
				</View>
				{/* 
				<View>
					<Button onPress={()=>rnBarContronl(true)} style={Styles.box2} >RN层控制 SHOW_BAR</Button>
					<Button onPress={()=>rnBarContronl(false)} style={Styles.box2} >RN层控制 HIDEN_BAR</Button>
				</View> 
				*/}
				<View>
					<Button onPress={()=>runCommand(true)} style={Styles.box3} >adb setprop ms.systembar.hide 1</Button>
					<Button onPress={()=>runCommand(false)} style={Styles.box3} >adb setprop ms.systembar.hide 0</Button>
				</View>
			</HStack>
		</View>
	);
};

const Styles = StyleSheet.create({
	box1:{
		marginLeft:50,
		marginTop:50,
	},
	box2:{
		marginTop:50,
		// backgroundColor:'#B190ED'
	},
	box3:{
		width:300,
		marginTop:50,
		// backgroundColor:'#F97583'
	}
});

export default StyleDemo;