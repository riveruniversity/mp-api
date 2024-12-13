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
    Check_in_Station: null | string;
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
    checkInStation: null | string;
    setupDate: string;
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

export function mapEventParticipantRecord(originalObject: EventParticipantRecord): EventParticipant {
    return {
        eventParticipantID: originalObject.Event_Participant_ID,
        eventID: originalObject.Event_ID,
        participantID: originalObject.Participant_ID,
        participationStatusID: originalObject.Participation_Status_ID,
        timeIn: originalObject.Time_In,
        timeConfirmed: originalObject.Time_Confirmed,
        timeOut: originalObject.Time_Out,
        notes: originalObject.Notes,
        groupParticipantID: originalObject.Group_Participant_ID,
        checkInStation: originalObject.Check_in_Station,
        setupDate: originalObject._Setup_Date,
        groupID: originalObject.Group_ID,
        roomID: originalObject.Room_ID,
        callParents: originalObject.Call_Parents,
        groupRoleID: originalObject.Group_Role_ID,
        responseID: originalObject.Response_ID,
        registrantMessageSent: originalObject.Registrant_Message_Sent,
        attendeeMessageSent: originalObject.Attendee_Message_Sent,
        attendingOnline: originalObject.Attending_Online,
        rsvpStatusID: originalObject.RSVP_Status_ID,
    };
}

export function mapEventParticipantToEventParticipantRecord(eventParticipant: EventParticipant): EventParticipantRecord {
    return {
        Event_Participant_ID: eventParticipant.eventParticipantID,
        Event_ID: eventParticipant.eventID,
        Participant_ID: eventParticipant.participantID,
        Participation_Status_ID: eventParticipant.participationStatusID,
        Time_In: eventParticipant.timeIn,
        Time_Confirmed: eventParticipant.timeConfirmed,
        Time_Out: eventParticipant.timeOut,
        Notes: eventParticipant.notes,
        Group_Participant_ID: eventParticipant.groupParticipantID,
        Check_in_Station: eventParticipant.checkInStation,
        _Setup_Date: eventParticipant.setupDate,
        Group_ID: eventParticipant.groupID,
        Room_ID: eventParticipant.roomID,
        Call_Parents: eventParticipant.callParents,
        Group_Role_ID: eventParticipant.groupRoleID,
        Response_ID: eventParticipant.responseID,
        Registrant_Message_Sent: eventParticipant.registrantMessageSent,
        Attendee_Message_Sent: eventParticipant.attendeeMessageSent,
        Attending_Online: eventParticipant.attendingOnline,
        RSVP_Status_ID: eventParticipant.rsvpStatusID,
    };
}
