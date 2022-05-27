import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Pressable, Text } from 'native-base';
import { roomStatusType } from '../type/meetingType';
import { useDispatch } from 'react-redux';
import { setRoomStatus } from '../store/meetingRoomSlice';

export default function MeetingRoomInfo (props: { roomName: string }) {

	const { roomName } = props;

	const dispatch = useDispatch();

	return (
		<Box style={styles.meetingRoomInfoWrapper}>
			<Text style={styles.meetingRoomName}>
				{roomName}
			</Text>
			<HStack space={3}>
				{
					statusController.map(item => (
						<Pressable key={item.text} onPress={() => dispatch(setRoomStatus(item.Status))}>
							<Text style={styles.meetingRoomDevices} >{item.text}</Text>
						</Pressable>))
				}
			</HStack>
		</Box>
	);
}
const styles = StyleSheet.create({
	meetingRoomInfoWrapper: {
		marginTop: 92
	},
	meetingRoomName: {
		marginBottom: 12
	},
	meetingRoomDevices: {
		paddingLeft: 8,
		paddingRight: 8,
		height: 28,
		borderWidth: 1,
		fontSize: 16,
		lineHeight: 28,
		textAlign: 'center',
		borderColor: 'white',
		opacity: 0.6,
		borderRadius: 2
	},
});


const statusController = [
	{
		text: 'FREE',
		Status: roomStatusType.FREE
	}, {
		text: 'USING',
		Status: roomStatusType.USING
	}, {
		text: 'READY',
		Status: roomStatusType.READY
	}
];
