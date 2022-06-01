import { NativeModules } from 'react-native';
const { DeviceUtilsModule:device} = NativeModules;


export const deviceUtils = {
	setUIVisible (isShow:boolean) {
		if(isShow){
			return  device.toShow();
		}else if(!isShow){
			return  device.toHiden();
		}else{
			return device.toTest();
		}
	},
	hidenBar (){
		return device.hidenBar();
	},
	showBar (){
		return device.showBar();
	}
};
