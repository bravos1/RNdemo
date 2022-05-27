import React, { useMemo } from 'react';
import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { roomStatusType } from '../type/meetingType';

export default function Timeline () {


	return (
		<Box style={styles.timelineWrapper}>

		</Box>
	);
}

const styles = StyleSheet.create({
	timelineWrapper: {
		position: 'absolute',
		right: 0,
		top: 0,
		width: 440,
		height: 800,
		backgroundColor: 'rgba(0,0,0,0.24)'
	},
});