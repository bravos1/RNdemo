import { Box, Text, Button } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { roomStatusType } from '../type/meetingType';

export default function BottomWrapper (props: { roomStatus: any; }) {
	const { roomStatus } = props;
	return (
		<Box style={styles.bottomWrapper}>
			{
				roomStatus === roomStatusType.FREE &&
        <Box>
        	<Text style={styles.bottomButtonTips}>【立即开会】可快速预约接下来30分钟或1小时的会议，你也可以点击右侧空闲时间段预约其他时间</Text>
        	<Button style={styles.bottomButton} _text={{ color: '#1ba247', fontSize: '32', fontWeight: 'bold' }}>STAR NOW</Button>
        </Box>
			}
			{
				roomStatus === roomStatusType.READY &&
        <Box>
        	<Button style={styles.bottomButton} _text={{ color: '#1ba247', fontSize: '32', fontWeight: 'bold' }}>STAR NOW</Button>
        </Box>
			}
			{
				roomStatus === roomStatusType.USING &&
        <Box>
        	<Button style={styles.bottomButton} _text={{ color: '#1ba247', fontSize: '32', fontWeight: 'bold' }}>STAR NOW</Button>
        </Box>
			}
		</Box>
	);
}
const styles = StyleSheet.create({
	bottomWrapper: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: 840,
		height: 240,
		paddingLeft: 120,
	},
	bottomButtonTips: {
		marginTop: 48,
		fontSize: 20,
		opacity: 0.6,
		width: 660,
		lineHeight: 30
	},
	bottomButton: {
		marginTop: 16,
		width: 224,
		height: 80,
		backgroundColor: 'white',
	},

});
