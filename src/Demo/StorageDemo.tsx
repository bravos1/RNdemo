import { Button, Text } from 'native-base';
import React from 'react';
import { View,StyleSheet } from 'react-native';

const StorageDemo = () => {
	const runStorageManager = () => { 
		console.log('💫 ~ runStorageManager');
	};
	return (
		<View>
			

			<Button onPress={runStorageManager}>Storage</Button>
		</View>
	);
};



export default StorageDemo;