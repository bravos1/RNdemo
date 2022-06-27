import { NativeModules,Dimensions, PixelRatio } from "react-native";
export const  { FaceUtils,DeviceUtils} = NativeModules;
import RNExitApp from 'react-native-exit-app';

export const  SystemControl = {
        showBar(){
            return DeviceUtils.showBar()
        },
        hideBar(){
            return DeviceUtils.hideBar()
        },
        exitApp(){
            DeviceUtils.showBar()
            return RNExitApp.exitApp();
        }
}