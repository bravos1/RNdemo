import { ScrollView } from 'native-base';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity,Button ,KeyboardAvoidingView, GestureResponderEvent} from 'react-native';

export default function Demo2() {
	const [selectedItem,setSeLectedItem] = useState<number|null>(null)
	// const inputRefList = useRef<ReactNode>([]);

	const selected = (index: number) => {
		setSeLectedItem(index)
		// console.log('💫 test:',inputRefList[index]?.focus());
	 }

	//  const measuredRef = useCallback(node => {
	// 	if (node !== null) {
	// 	  setHeight(node.getBoundingClientRect().height);
	// 	}
	//   }, []);


	return (
		<View style={styles.container}>
				<ScrollView style={styles.scroll}>
					{
						['1', '2', '3', '4','5','6'].map((item,index) => (
							<TouchableOpacity onPress={()=>selected(index)}>
							<View style={[styles.itemWrapper,selectedItem===index &&styles.selectedItem]}>
								<Text style={styles.itemText}>TEST</Text>
								{
									(selectedItem===index)&&
									<KeyboardAvoidingView style={{flex:1}} behavior='position' keyboardVerticalOffset={20}>
									<InputFC 
										style={styles.itemInput} 
										placeholder='NO TEXT' 
										placeholderTextColor={'white'} 
										autoCapitalize={'none'}
									/>
									</KeyboardAvoidingView>
								}							
							</View>
						</TouchableOpacity>
						))
					}
				</ScrollView>
		</View>
	);
}


const InputFC = (props: { style: any; placeholder: any; placeholderTextColor: any; autoCapitalize: any; }) => {
	const {style,placeholder,placeholderTextColor,autoCapitalize} = props
	const inputRef = useRef<TextInput>(null);
	
	useEffect(()=>{
		if(inputRef.current) inputRef.current.focus()
	})
	
	return (
	<TextInput 
		style={style} 
		ref={inputRef}
		placeholder={placeholder}
		placeholderTextColor={placeholderTextColor} 
		autoCapitalize={autoCapitalize}
	/>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#24292e',
	},
	scroll: {
		flex: 1,
		paddingHorizontal: 120,
	},

	itemWrapper:{
		width: 1024,
		paddingLeft:20,
		paddingVertical:20,
		marginBottom: 20,
		backgroundColor: 'rgba(255, 255, 255, 0.04)',
		borderRadius:20,
	},
	itemText:{
		fontSize:20,
		fontWeight:'bold',
		color:'white',
		alignItems:'center',
		justifyContent:'center',
		marginBottom:5,
	}
	,
	itemInput:{
		fontSize:20,
		color:'white',
	},
	selectedItem:{
		borderWidth:3,
		borderColor:'#2188ff'
	}
});
