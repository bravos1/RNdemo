import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default function App() {
  const [selectedItem,setSeLectedItem] = useState(null)
  const [userTyping,setUserTyping] = useState(false);

	const selected = (index) => {
    setUserTyping(true)
	  setSeLectedItem(index)
	}
  const onBlur=()=>{
    setUserTyping(false)
  }

  return (
    <SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={Platform.OS === 'ios' && {flex: 1}}
          keyboardVerticalOffset={30}
      >
			<ScrollView style={styles.scroll}>
					{
						['1', '2', '3', '4','5','6','7'].map((item,index) => (
							<TouchableOpacity onPress={()=>selected(index)} key={item}>
							<View style={[styles.itemWrapper,selectedItem===index &&styles.selectedItem]}>
								<Text style={styles.itemText}>TEST {item}</Text>
								{
									(selectedItem===index)&&userTyping&&
									<InputFC 
										style={styles.itemInput} 
										placeholder='NO TEXT' 
										placeholderTextColor={'white'} 
										autoCapitalize={'none'}
                    onBlur={onBlur}
									/>
								}							
							</View>
						</TouchableOpacity>
						))
					}
				</ScrollView>
			</KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const InputFC = (props) => {
	const {style,placeholder,placeholderTextColor,autoCapitalize,onBlur} = props
	const inputRef = useRef(null);
	
	useEffect(()=>{
		if(inputRef.current) inputRef?.current?.focus()
	})
	
	return (
	<TextInput 
		style={style} 
		ref={inputRef}
		placeholder={placeholder}
		placeholderTextColor={placeholderTextColor} 
		autoCapitalize={autoCapitalize}
    onBlur={onBlur}
	/>)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#24292e',
    flex: 1
	},
	scroll: {
		paddingHorizontal: 20,
    overflow: "visible",
	},

	itemWrapper:{
		width: '100%',
		paddingLeft:20,
		paddingVertical:20,
		marginBottom: 20,
		backgroundColor: '#6b6965',
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
		borderColor:'#2188ff',
	}
});
