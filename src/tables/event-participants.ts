export interface EventParticipantRecord {
    Event_Participant_ID: number;
    Event_ID: number;
    Participant_ID: number;
    Participation_Status_ID: number;
    Time_In: string;
    Time_Confirmed: string | null;
    Time_Out: string | null;
    Notes: string;
    Group_Participant_ID: null | number;
    'Check-in_Station': null | string;
    _Setup_Date: string;
    Group_ID: number;
    Room_ID: null | number;
    Call_Parents: null | string;
    Group_Role_ID: number;
    Response_ID: null | number;
    Registrant_Message_Sent: boolean;
    Attendee_Message_Sent: boolean;
    Attending_Online: boolean;
    RSVP_Status_ID: null | number;
}

export interface EventParticipant {
    eventParticipantID: number;
    eventID: number;
    participantID: number;
    participationStatusID: number;
    timeIn: string;
    timeConfirmed: string | null;
    timeOut: string | null;
    notes: string;
    groupParticipantID: null | number;
    'check-InStation': null | string;
    readonly _setupDate: string;
    groupID: number;
    roomID: null | number;
    callParents: null | string;
    groupRoleID: number;
    responseID: null | number;
    registrantMessageSent: boolean;
    attendeeMessageSent: boolean;
    attendingOnline: boolean;
    rsvpStatusID: null | number;
}