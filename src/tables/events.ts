export type EventRecord = {
    Event_ID: number;
    Event_Title: string;
    Event_Type_ID: number;
    Congregation_ID: number;
    Location_ID: null | number;
    Meeting_Instructions: null | string;
    Description: null | string;
    Program_ID: number;
    Primary_Contact: number;
    Participants_Expected: null | number;
    Minutes_for_Setup: number;
    Event_Start_Date: string;
    Event_End_Date: string;
    Minutes_for_Cleanup: number;
    Cancelled: boolean;
    _Approved: boolean;
    Public_Website_Settings: null | string;
    Visibility_Level_ID: number;
    Featured_On_Calendar: boolean;
    Online_Registration_Product: null | string;
    Registration_Form: null | string;
    Registration_Start: string;
    Registration_End: string;
    Registration_Active: boolean;
    Register_Into_Series: boolean;
    External_Registration_URL: null | string;
    _Web_Approved: boolean;
    Force_Login: boolean;
    Check_in_Information: null | string;
    Allow_Check_in: boolean;
    Ignore_Program_Groups: boolean;
    Prohibit_Guests: boolean;
    Search_Results: number;
    Early_Check_in_Period: null | string;
    Late_Check_in_Period: null | string;
    Notification_Settings: null | string;
    Registrant_Message: null | string;
    Days_Out_to_Remind: null | number;
    Optional_Reminder_Message: null | string;
    Attendee_Message: null | string;
    Send_To_Heads: boolean;
    Other_Event_Information: null | string;
    Parent_Event_ID: null | number;
    Priority_ID: null | number;
    On_Connection_Card: boolean;
    Accounting_Information: null | string;
    On_Donation_Batch_Tool: boolean;
    Project_Code: null | string;
    Online_Meeting_Link: null | string;
    Read_More_URL: null | string;
    Allow_Self_Checkin: boolean;
    Minor_Registration: boolean;
    Allow_Email: boolean;
    Show_Building_Room_Info: boolean;
    Convert_Default_Contacts: boolean;
}

export type Event = {
    eventID: number;
    eventTitle: string;
    eventTypeID: number;
    congregationID: number;
    locationID: null | number;
    meetingInstructions: null | string;
    description: null | string;
    programID: number;
    primaryContact: number;
    participantsExpected: null | number;
    minutesForSetup: number;
    eventStartDate: string;
    eventEndDate: string;
    minutesForCleanup: number;
    cancelled: boolean;
    approved: boolean;
    publicWebsiteSettings: null | string;
    visibilityLevelID: number;
    featuredOnCalendar: boolean;
    onlineRegistrationProduct: null | string;
    registrationForm: null | string;
    registrationStart: string;
    registrationEnd: string;
    registrationActive: boolean;
    registerIntoSeries: boolean;
    externalRegistrationURL: null | string;
    webApproved: boolean;
    forceLogin: boolean;
    checkInInformation: null | string;
    allowCheckin: boolean;
    ignoreProgramGroups: boolean;
    prohibitGuests: boolean;
    searchResults: number;
    earlyCheckinPeriod: null | string;
    lateCheckinPeriod: null | string;
    notificationSettings: null | string;
    registrantMessage: null | string;
    daysOutToRemind: null | number;
    optionalReminderMessage: null | string;
    attendeeMessage: null | string;
    sendToHeads: boolean;
    otherEventInformation: null | string;
    parentEventID: null | number;
    priorityID: null | number;
    onConnectionCard: boolean;
    accountingInformation: null | string;
    onDonationBatchTool: boolean;
    projectCode: null | string;
    onlineMeetingLink: null | string;
    readMoreURL: null | string;
    allowSelfCheckin: boolean;
    minorRegistration: boolean;
    allowEmail: boolean;
    showBuildingRoomInfo: boolean;
    convertDefaultContacts: boolean;
}

export function mapEventRecord(originalObject: EventRecord): Event {
    return {
        eventID: originalObject.Event_ID,
        eventTitle: originalObject.Event_Title,
        eventTypeID: originalObject.Event_Type_ID,
        congregationID: originalObject.Congregation_ID,
        locationID: originalObject.Location_ID,
        meetingInstructions: originalObject.Meeting_Instructions,
        description: originalObject.Description,
        programID: originalObject.Program_ID,
        primaryContact: originalObject.Primary_Contact,
        participantsExpected: originalObject.Participants_Expected,
        minutesForSetup: originalObject.Minutes_for_Setup,
        eventStartDate: originalObject.Event_Start_Date,
        eventEndDate: originalObject.Event_End_Date,
        minutesForCleanup: originalObject.Minutes_for_Cleanup,
        cancelled: originalObject.Cancelled,
        approved: originalObject._Approved,
        publicWebsiteSettings: originalObject.Public_Website_Settings,
        visibilityLevelID: originalObject.Visibility_Level_ID,
        featuredOnCalendar: originalObject.Featured_On_Calendar,
        onlineRegistrationProduct: originalObject.Online_Registration_Product,
        registrationForm: originalObject.Registration_Form,
        registrationStart: originalObject.Registration_Start,
        registrationEnd: originalObject.Registration_End,
        registrationActive: originalObject.Registration_Active,
        registerIntoSeries: originalObject.Register_Into_Series,
        externalRegistrationURL: originalObject.External_Registration_URL,
        webApproved: originalObject._Web_Approved,
        forceLogin: originalObject.Force_Login,
        checkInInformation: originalObject.Check_in_Information,
        allowCheckin: originalObject.Allow_Check_in,
        ignoreProgramGroups: originalObject.Ignore_Program_Groups,
        prohibitGuests: originalObject.Prohibit_Guests,
        searchResults: originalObject.Search_Results,
        earlyCheckinPeriod: originalObject.Early_Check_in_Period,
        lateCheckinPeriod: originalObject.Late_Check_in_Period,
        notificationSettings: originalObject.Notification_Settings,
        registrantMessage: originalObject.Registrant_Message,
        daysOutToRemind: originalObject.Days_Out_to_Remind,
        optionalReminderMessage: originalObject.Optional_Reminder_Message,
        attendeeMessage: originalObject.Attendee_Message,
        sendToHeads: originalObject.Send_To_Heads,
        otherEventInformation: originalObject.Other_Event_Information,
        parentEventID: originalObject.Parent_Event_ID,
        priorityID: originalObject.Priority_ID,
        onConnectionCard: originalObject.On_Connection_Card,
        accountingInformation: originalObject.Accounting_Information,
        onDonationBatchTool: originalObject.On_Donation_Batch_Tool,
        projectCode: originalObject.Project_Code,
        onlineMeetingLink: originalObject.Online_Meeting_Link,
        readMoreURL: originalObject.Read_More_URL,
        allowSelfCheckin: originalObject.Allow_Self_Checkin,
        minorRegistration: originalObject.Minor_Registration,
        allowEmail: originalObject.Allow_Email,
        showBuildingRoomInfo: originalObject.Show_Building_Room_Info,
        convertDefaultContacts: originalObject.Convert_Default_Contacts,
    };
}

export function mapEventToEventRecord(event: Event): EventRecord {
    return {
        Event_ID: event.eventID,
        Event_Title: event.eventTitle,
        Event_Type_ID: event.eventTypeID,
        Congregation_ID: event.congregationID,
        Location_ID: event.locationID,
        Meeting_Instructions: event.meetingInstructions,
        Description: event.description,
        Program_ID: event.programID,
        Primary_Contact: event.primaryContact,
        Participants_Expected: event.participantsExpected,
        Minutes_for_Setup: event.minutesForSetup,
        Event_Start_Date: event.eventStartDate,
        Event_End_Date: event.eventEndDate,
        Minutes_for_Cleanup: event.minutesForCleanup,
        Cancelled: event.cancelled,
        _Approved: event.approved,
        Public_Website_Settings: event.publicWebsiteSettings,
        Visibility_Level_ID: event.visibilityLevelID,
        Featured_On_Calendar: event.featuredOnCalendar,
        Online_Registration_Product: event.onlineRegistrationProduct,
        Registration_Form: event.registrationForm,
        Registration_Start: event.registrationStart,
        Registration_End: event.registrationEnd,
        Registration_Active: event.registrationActive,
        Register_Into_Series: event.registerIntoSeries,
        External_Registration_URL: event.externalRegistrationURL,
        _Web_Approved: event.webApproved,
        Force_Login: event.forceLogin,
        Check_in_Information: event.checkInInformation,
        Allow_Check_in: event.allowCheckin,
        Ignore_Program_Groups: event.ignoreProgramGroups,
        Prohibit_Guests: event.prohibitGuests,
        Search_Results: event.searchResults,
        Early_Check_in_Period: event.earlyCheckinPeriod,
        Late_Check_in_Period: event.lateCheckinPeriod,
        Notification_Settings: event.notificationSettings,
        Registrant_Message: event.registrantMessage,
        Days_Out_to_Remind: event.daysOutToRemind,
        Optional_Reminder_Message: event.optionalReminderMessage,
        Attendee_Message: event.attendeeMessage,
        Send_To_Heads: event.sendToHeads,
        Other_Event_Information: event.otherEventInformation,
        Parent_Event_ID: event.parentEventID,
        Priority_ID: event.priorityID,
        On_Connection_Card: event.onConnectionCard,
        Accounting_Information: event.accountingInformation,
        On_Donation_Batch_Tool: event.onDonationBatchTool,
        Project_Code: event.projectCode,
        Online_Meeting_Link: event.onlineMeetingLink,
        Read_More_URL: event.readMoreURL,
        Allow_Self_Checkin: event.allowSelfCheckin,
        Minor_Registration: event.minorRegistration,
        Allow_Email: event.allowEmail,
        Show_Building_Room_Info: event.showBuildingRoomInfo,
        Convert_Default_Contacts: event.convertDefaultContacts,
    };
}
