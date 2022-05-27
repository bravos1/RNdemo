import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
export default function Demo3 () {
	console.log('\n\n');

	const onBarCodeRead = (message: any) => {
		console.log('\n\n');
		console.log('💫 barCode message:', message);
	};

	return (
		<View style={styles.demo3}>
			<Text>Demo3</Text>
			<RNCamera onBarCodeRead={onBarCodeRead} />
		</View>
	);
}

const styles = StyleSheet.create({
	demo3: {
		flex: 1,
		color: 'white',
		backgroundColor: '#24292e',
	},
	camera: {
		height: 400,
		width: 400,
	},
});
