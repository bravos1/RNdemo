import { View, Text, Image, StyleSheet, ImageLoadEventData, NativeSyntheticEvent } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { Button } from 'native-base';


const LOGO_HEIGHT = 40;
const logoUrl1='https://s3.cn-north-1.amazonaws.com.cn/milesight-smart-office-dev/enterprise_avatar/b9156604-2318-4098-8e3b-9f1e3d78118a_1644892644.png';
const logoUrl2='https://s3.cn-north-1.amazonaws.com.cn/milesight-smart-office-dev/enterprise_avatar/823ab952-aa4e-4299-9783-9b2db65c0a18_1646363800.png';

const Demo = () => {
	const [imageType,setImageType]= useState(false);
	const [ imageWidth, setImageWidth ] = useState(148);

	const changeImage = () => { 
		setImageType(!imageType);
	};
	const logoUrl=useMemo(()=>imageType?logoUrl1:logoUrl2 ,[imageType]);

	const onLoad = useCallback((event: NativeSyntheticEvent<ImageLoadEventData>) => {
		try {
			const source = event.nativeEvent.source;
			const { width, height } = source;
			const ratio = width / height;
			const imageHeight = LOGO_HEIGHT;
			const imageWidth = ratio * imageHeight;
			
			setImageWidth(imageWidth);
		} catch (error) {
			setImageWidth(148);
		}
	}, []);

	console.log('💫 ~ logoUrl', logoUrl, imageWidth);
	return (
		<>
			<Text>Demo</Text>
			<View style={styles.imageContainer}>
				<Image  resizeMode='contain' style={[{minWidth:imageWidth,height:LOGO_HEIGHT},imageType&&styles.imageStyle]} source={{uri:logoUrl}} onLoad={onLoad}/> 
			</View>
			<Button onPress={changeImage}>
        test
			</Button>
		</>
	);
};

export default Demo;

const styles = StyleSheet.create({
	imageContainer:{
		flex:1,
		alignItems:'center'
	},
	imageStyle:{
		tintColor: '#fff'
	}
});