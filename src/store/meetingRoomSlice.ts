import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { meetingRoomStateType, roomStatusType } from "../type/meetingType";

const initialState: meetingRoomStateType = {
  roomName: "Meeting Room 001",
  roomStatus: roomStatusType.FREE,

  meetingMessage: {
    meetingTheme: "2022 React Confrence",
    meetingCreater: "Hux",
    meetingStartTime: "12:00",
    meetingEndTime: "24:00",
  },
};

export const meetingRoomSlice = createSlice({
  name: "meetingRoom",
  initialState: initialState,
  reducers: {
    setRoomStatus: (state, action: PayloadAction<roomStatusType>) => {
      state.roomStatus = action.payload;
    },
  },
});

export const { setRoomStatus } = meetingRoomSlice.actions;

export default meetingRoomSlice.reducer;
