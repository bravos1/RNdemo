import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import Proximity from 'react-native-proximity';



const SensorDemo = () => {
	const [close, setClose] = useState<boolean|null>(null);
	
	const proximityData = (value: any) => { 
		setClose(value.distance?false:true);
	};
    
	useEffect(() => {
		Proximity.addListener(proximityData);
		return ()=>{
			Proximity.removeListener(proximityData);
		};
	}, []);

	return (
		<View>
			<Text>SensorDemo</Text>
			<Text>距离检测：{close===true?'有人':'无人'}</Text>
		</View>
	);
};

export default SensorDemo;