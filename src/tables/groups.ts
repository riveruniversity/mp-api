export interface GroupRecord {
    Group_ID: number;
    Group_Name: string;
    Group_Type_ID: number;
    Ministry_ID: number;
    Congregation_ID: number;
    Primary_Contact: number;
    Description: null | string;
    Start_Date: string;
    End_Date: string;
    Target_Size: null | number;
    Parent_Group: null | number;
    Priority_ID: null | number;
    Small_Group_Information: null | string;
    Offsite_Meeting_Address: null | string;
    Group_Is_Full: boolean;
    Available_Online: boolean;
    Meets_Online: boolean;
    Life_Stage_ID: null | number;
    Group_Focus_ID: number;
    Meeting_Time: null | string;
    Meeting_Day_ID: null | number;
    Meeting_Frequency_ID: null | number;
    Meeting_Duration_ID: null | number;
    Required_Book: null | string;
    Descended_From: null | number;
    Reason_Ended: null | string;
    _Last_Attendance_Posted: null | string;
    _Last_Group_Member_Changed: string;
    Check_in_Information: null | string;
    'Secure_Check-in': boolean;
    Suppress_Nametag: boolean;
    Suppress_Care_Note: boolean;
    On_Classroom_Manager: boolean;
    Promotion_Information: null | string;
    Promote_to_Group: null | string;
    Age_in_Months_to_Promote: null | number;
    Promote_Weekly: boolean;
    Promotion_Date: null | string;
    Promote_Participants_Only: boolean;
    Notifications: null | string;
    Send_Attendance_Notification: boolean;
    Send_Service_Notification: boolean;
    Enable_Discussion: boolean;
    SMS_Number: null | string;
    Default_Meeting_Room: null | string;
    Create_Next_Meeting: boolean;
    Next_Scheduled_Meeting: null | string;
    Available_On_App: null | string;
}

export interface Group {
    groupID: number;
    groupName: string;
    groupTypeID: number;
    ministryID: number;
    congregationID: number;
    primaryContact: number;
    description: null | string;
    startDate: string;
    endDate: string;
    targetSize: null | number;
    parentGroup: null | number;
    priorityID: null | number;
    smallGroupInformation: null | string;
    offsiteMeetingAddress: null | string;
    groupIsFull: boolean;
    availableOnline: boolean;
    meetsOnline: boolean;
    lifeStageID: null | number;
    groupFocusID: number;
    meetingTime: null | string;
    meetingDayID: null | number;
    meetingFrequencyID: null | number;
    meetingDurationID: null | number;
    requiredBook: null | string;
    descendedFrom: null | number;
    reasonEnded: null | string;
    readonly _lastAttendancePosted: null | string;
    readonly _lastGroupMemberChanged: string;
    checkInInformation: null | string;
    secureCheckIn: boolean;
    suppressNametag: boolean;
    suppressCareNote: boolean;
    onClassroomManager: boolean;
    promotionInformation: null | string;
    promoteToGroup: null | string;
    ageInMonthsToPromote: null | number;
    promoteWeekly: boolean;
    promotionDate: null | string;
    promoteParticipantsOnly: boolean;
    notifications: null | string;
    sendAttendanceNotification: boolean;
    sendServiceNotification: boolean;
    enableDiscussion: boolean;
    smsNumber: null | string;
    defaultMeetingRoom: null | string;
    createNextMeeting: boolean;
    nextScheduledMeeting: null | string;
    availableOnApp: null | string;
}