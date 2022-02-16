export enum roomStatusType {
  FREE = 'free',
  USING = 'using',
  READY = 'ready',
}

export interface meetingRoomStateType {
  roomName: string;
  roomStatus: roomStatusType;

  meetingMessage: {
    meetingTheme: string | null;
    meetingCreater: string | null;
    meetingStartTime: string | null;
    meetingEndTime: string | null;
  };
}
