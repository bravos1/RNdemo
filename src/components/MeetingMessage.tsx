import React from 'react';
import { Box, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { roomStatusType } from '../type/meetingType';


export default function MeetingMessage (props: { meetingMessage: any; roomStatus: roomStatusType }) {
	const { meetingMessage, roomStatus } = props;

	return (
		<Box style={styles.meetingMessage}>
			{
				meetingMessage && roomStatus === roomStatusType.USING &&
                < Box >
                	<Text>{meetingMessage.meetingTheme}</Text>
                	<Text>{meetingMessage.meetingCreater}</Text>
                	<Text></Text>
                </Box>
			}
		</Box >
	);
}

const styles = StyleSheet.create({
	meetingMessage: {
		marginTop: 20
	},
});