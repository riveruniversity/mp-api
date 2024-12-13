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
    Secure_Check_in: boolean;
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
    lastAttendancePosted: null | string;
    lastGroupMemberChanged: string;
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

export function mapGroupRecord(record: GroupRecord): Group {
    return {
        groupID: record.Group_ID,
        groupName: record.Group_Name,
        groupTypeID: record.Group_Type_ID,
        ministryID: record.Ministry_ID,
        congregationID: record.Congregation_ID,
        primaryContact: record.Primary_Contact,
        description: record.Description,
        startDate: record.Start_Date,
        endDate: record.End_Date,
        targetSize: record.Target_Size,
        parentGroup: record.Parent_Group,
        priorityID: record.Priority_ID,
        smallGroupInformation: record.Small_Group_Information,
        offsiteMeetingAddress: record.Offsite_Meeting_Address,
        groupIsFull: record.Group_Is_Full,
        availableOnline: record.Available_Online,
        meetsOnline: record.Meets_Online,
        lifeStageID: record.Life_Stage_ID,
        groupFocusID: record.Group_Focus_ID,
        meetingTime: record.Meeting_Time,
        meetingDayID: record.Meeting_Day_ID,
        meetingFrequencyID: record.Meeting_Frequency_ID,
        meetingDurationID: record.Meeting_Duration_ID,
        requiredBook: record.Required_Book,
        descendedFrom: record.Descended_From,
        reasonEnded: record.Reason_Ended,
        lastAttendancePosted: record._Last_Attendance_Posted,
        lastGroupMemberChanged: record._Last_Group_Member_Changed,
        checkInInformation: record.Check_in_Information,
        secureCheckIn: record.Secure_Check_in,
        suppressNametag: record.Suppress_Nametag,
        suppressCareNote: record.Suppress_Care_Note,
        onClassroomManager: record.On_Classroom_Manager,
        promotionInformation: record.Promotion_Information,
        promoteToGroup: record.Promote_to_Group,
        ageInMonthsToPromote: record.Age_in_Months_to_Promote,
        promoteWeekly: record.Promote_Weekly,
        promotionDate: record.Promotion_Date,
        promoteParticipantsOnly: record.Promote_Participants_Only,
        notifications: record.Notifications,
        sendAttendanceNotification: record.Send_Attendance_Notification,
        sendServiceNotification: record.Send_Service_Notification,
        enableDiscussion: record.Enable_Discussion,
        smsNumber: record.SMS_Number,
        defaultMeetingRoom: record.Default_Meeting_Room,
        createNextMeeting: record.Create_Next_Meeting,
        nextScheduledMeeting: record.Next_Scheduled_Meeting,
        availableOnApp: record.Available_On_App,
    };
}

export function mapGroupToGroupRecord(group: Group): GroupRecord {
    return {
        Group_ID: group.groupID,
        Group_Name: group.groupName,
        Group_Type_ID: group.groupTypeID,
        Ministry_ID: group.ministryID,
        Congregation_ID: group.congregationID,
        Primary_Contact: group.primaryContact,
        Description: group.description,
        Start_Date: group.startDate,
        End_Date: group.endDate,
        Target_Size: group.targetSize,
        Parent_Group: group.parentGroup,
        Priority_ID: group.priorityID,
        Small_Group_Information: group.smallGroupInformation,
        Offsite_Meeting_Address: group.offsiteMeetingAddress,
        Group_Is_Full: group.groupIsFull,
        Available_Online: group.availableOnline,
        Meets_Online: group.meetsOnline,
        Life_Stage_ID: group.lifeStageID,
        Group_Focus_ID: group.groupFocusID,
        Meeting_Time: group.meetingTime,
        Meeting_Day_ID: group.meetingDayID,
        Meeting_Frequency_ID: group.meetingFrequencyID,
        Meeting_Duration_ID: group.meetingDurationID,
        Required_Book: group.requiredBook,
        Descended_From: group.descendedFrom,
        Reason_Ended: group.reasonEnded,
        _Last_Attendance_Posted: group.lastAttendancePosted,
        _Last_Group_Member_Changed: group.lastGroupMemberChanged,
        Check_in_Information: group.checkInInformation,
        Secure_Check_in: group.secureCheckIn,
        Suppress_Nametag: group.suppressNametag,
        Suppress_Care_Note: group.suppressCareNote,
        On_Classroom_Manager: group.onClassroomManager,
        Promotion_Information: group.promotionInformation,
        Promote_to_Group: group.promoteToGroup,
        Age_in_Months_to_Promote: group.ageInMonthsToPromote,
        Promote_Weekly: group.promoteWeekly,
        Promotion_Date: group.promotionDate,
        Promote_Participants_Only: group.promoteParticipantsOnly,
        Notifications: group.notifications,
        Send_Attendance_Notification: group.sendAttendanceNotification,
        Send_Service_Notification: group.sendServiceNotification,
        Enable_Discussion: group.enableDiscussion,
        SMS_Number: group.smsNumber,
        Default_Meeting_Room: group.defaultMeetingRoom,
        Create_Next_Meeting: group.createNextMeeting,
        Next_Scheduled_Meeting: group.nextScheduledMeeting,
        Available_On_App: group.availableOnApp,
    };
}
