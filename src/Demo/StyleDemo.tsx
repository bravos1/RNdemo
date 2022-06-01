import { View,  StyleSheet } from 'react-native';
import React from 'react';

const StyleDemo = () => {
	return (
		<View style={{flex:1,flexDirection:'row'}}>
			<View style={{width:200,height:200,backgroundColor:'white'}}/>
			<View style={Styles.box1}/>
			<View style={Styles.box1}/>
			<View style={Styles.box2}/>
		</View>
	);
};

const Styles = StyleSheet.create({
	box1:{
		width:200,
		height:200,
		backgroundColor:'#2B3036'
	},
	box2:{
		width:100,
		height:100,
		backgroundColor:'#D1D5DA'
	}
});

export default StyleDemo;