import { NativeModules } from 'react-native';
const { DeviceUtilsModule:device} = NativeModules;


export const deviceUtils = {
	setUIVisible (isShow:boolean) {
		console.log('\n\n '); 
		console.log('💫 ~ isShow', isShow);

		if(isShow){
			return  device.toShow();
		}else if(!isShow){
			return  device.toHiden();
		}else{
			return device.toTest();
		}
     
	}
};
