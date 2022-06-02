import { NativeModules } from 'react-native';
const { DeviceUtilsModule:device} = NativeModules;
export const deviceUtils = {
	ADBCommand : device.RNcommand,

	hidenBar (){
		return device.hidenBar();
	},
	showBar (){
		return device.showBar();
	},
	runCommand (command:string){
		return this.ADBCommand(command);
	}

};
