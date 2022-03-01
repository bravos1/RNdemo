import { ScrollView } from 'native-base';
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function Demo2() {
	return (
		<View style={styles.container}>
			<TextInput style={styles.textInput} defaultValue={'item'} />

			<ScrollView style={styles.scroll}>
				{
					['1', '2', '3', '4', '7', '8'].map(item => (
						<View style={styles.itemContainer} key={item}>
							<TextInput style={styles.textInput} defaultValue={item} />
						</View>
					))
				}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#24292e',
	},
	scroll: {
		flex: 1,
		paddingHorizontal: 120,
	},
	itemContainer: {
		width: 1024,
		height: 96,
		justifyContent: 'center',
		marginBottom: 20,
		backgroundColor: 'rgba(255, 255, 255, 0.04)',
	},
	textInput: {
		width: '100%',
		color: 'white',
	},
});
