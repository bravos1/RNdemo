import { ScrollView } from 'native-base';
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity,Button ,KeyboardAvoidingView} from 'react-native';

export default function Demo2() {

	const [typing,setTyping] = useState(false);
	const inputRef = useRef<TextInput>(null);

	const onPress =async () => { 
		await setTyping(!typing);
		inputRef?.current &&inputRef?.current?.focus();
	};

	const inputOnblur=()=>{
		setTyping(!typing);
	};
	
	const test = () => {
		inputRef?.current&&inputRef.current?.blur();
	};
	return (
		<View style={styles.container}>
			<Button title={'sss'} onPress={test}/>

			<KeyboardAvoidingView style={{flex:1}} behavior={'padding'} >
				<ScrollView style={styles.scroll}>
					{
						['1', '2', '3', '4'].map(item => (
							<TouchableOpacity key={item}>
								<View style={styles.itemContainer} >
									<Text style={{color:'white'}}>{item}</Text>
								</View>
							</TouchableOpacity>
						))
					}
					<TouchableOpacity onPress={onPress}>
						<View style={styles.customContainer}>
							<Text style={{color:'white',height:70,alignItems:'center',justifyContent:'center'}}>test</Text>
							{
								typing&&
								<TextInput 
									ref={inputRef}
									style={styles.customInput} 
									placeholder='NO TEXT' 
									placeholderTextColor={'white'} 
									autoCapitalize={'none'}
									onBlur={inputOnblur}
								/>
							}
						</View>
					</TouchableOpacity>
				</ScrollView>
			</KeyboardAvoidingView>

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
		paddingLeft:20,
		backgroundColor: 'rgba(255, 255, 255, 0.04)',
	},
	textInput: {
		width: '100%',
		color: 'white',
		backgroundColor:'#6a737d'
	},
	customContainer:{
		width: 1024,
		paddingVertical:20,
		justifyContent: 'center',
		marginBottom: 20,
		paddingLeft:20,
		backgroundColor: 'rgba(255, 255, 255, 0.04)',
	},
	customInput:{
		height:70,
		color:'white',
		backgroundColor:'#2a3834'
	}
});
