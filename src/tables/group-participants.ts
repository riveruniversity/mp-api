export interface GroupParticipantRecord {
    Group_Participant_ID: number;
    Group_ID: number;
    Participant_ID: number;
    Group_Role_ID: number;
    Start_Date: string;
    End_Date: string | null;
    Employee_Role: boolean;
    Hours_Per_Week: null | number;
    Notes: null | string;
    Need_Book: boolean;
    Email_Opt_Out: boolean;
    Share_With_Group: boolean;
    Auto_Promote: boolean;
    _First_Attendance: null | string;
    _Second_Attendance: null | string;
    _Third_Attendance: null | string;
    _Last_Attendance: null | string;
    Show_Email: boolean;
    Show_Phone: boolean;
    Show_Last_Name: boolean;
    Show_Photo: boolean;
    _Show_Birthday: boolean;
    _Show_Email: boolean;
    _Show_Home_Phone: boolean;
    _Show_Mobile_Phone: boolean;
    _Show_Address: boolean;
    _Show_Photo: boolean;
}

export interface GroupParticipant {
    groupParticipantID: number;
    groupID: number;
    participantID: number;
    groupRoleID: number;
    startDate: string;
    endDate: string | null;
    employeeRole: boolean;
    hoursPerWeek: null | number;
    notes: null | string;
    needBook: boolean;
    emailOptOut: boolean;
    shareWithGroup: boolean;
    autoPromote: boolean;
    firstAttendance: null | string;
    secondAttendance: null | string;
    thirdAttendance: null | string;
    lastAttendance: null | string;
    showEmail: boolean;
    showPhone: boolean;
    showLastName: boolean;
    showPhoto: boolean;
    _showBirthday: boolean;
    _showEmail: boolean;
    _showHomePhone: boolean;
    _showMobilePhone: boolean;
    _showAddress: boolean;
    _showPhoto: boolean;
}

export function mapGroupParticipantRecord(originalObject: GroupParticipantRecord): GroupParticipant {
    return {
        groupParticipantID: originalObject.Group_Participant_ID,
        groupID: originalObject.Group_ID,
        participantID: originalObject.Participant_ID,
        groupRoleID: originalObject.Group_Role_ID,
        startDate: originalObject.Start_Date,
        endDate: originalObject.End_Date,
        employeeRole: originalObject.Employee_Role,
        hoursPerWeek: originalObject.Hours_Per_Week,
        notes: originalObject.Notes,
        needBook: originalObject.Need_Book,
        emailOptOut: originalObject.Email_Opt_Out,
        shareWithGroup: originalObject.Share_With_Group,
        autoPromote: originalObject.Auto_Promote,
        firstAttendance: originalObject._First_Attendance,
        secondAttendance: originalObject._Second_Attendance,
        thirdAttendance: originalObject._Third_Attendance,
        lastAttendance: originalObject._Last_Attendance,
        showEmail: originalObject.Show_Email,
        showPhone: originalObject.Show_Phone,
        showLastName: originalObject.Show_Last_Name,
        showPhoto: originalObject.Show_Photo,
        _showBirthday: originalObject._Show_Birthday,
        _showEmail: originalObject._Show_Email,
        _showHomePhone: originalObject._Show_Home_Phone,
        _showMobilePhone: originalObject._Show_Mobile_Phone,
        _showAddress: originalObject._Show_Address,
        _showPhoto: originalObject._Show_Photo,
    };
}

export function mapGroupParticipantToGroupParticipantRecord(groupParticipant: GroupParticipant): GroupParticipantRecord {
    return {
        Group_Participant_ID: groupParticipant.groupParticipantID,
        Group_ID: groupParticipant.groupID,
        Participant_ID: groupParticipant.participantID,
        Group_Role_ID: groupParticipant.groupRoleID,
        Start_Date: groupParticipant.startDate,
        End_Date: groupParticipant.endDate,
        Employee_Role: groupParticipant.employeeRole,
        Hours_Per_Week: groupParticipant.hoursPerWeek,
        Notes: groupParticipant.notes,
        Need_Book: groupParticipant.needBook,
        Email_Opt_Out: groupParticipant.emailOptOut,
        Share_With_Group: groupParticipant.shareWithGroup,
        Auto_Promote: groupParticipant.autoPromote,
        _First_Attendance: groupParticipant.firstAttendance,
        _Second_Attendance: groupParticipant.secondAttendance,
        _Third_Attendance: groupParticipant.thirdAttendance,
        _Last_Attendance: groupParticipant.lastAttendance,
        Show_Email: groupParticipant.showEmail,
        Show_Phone: groupParticipant.showPhone,
        Show_Last_Name: groupParticipant.showLastName,
        Show_Photo: groupParticipant.showPhoto,
        _Show_Birthday: groupParticipant._showBirthday,
        _Show_Email: groupParticipant._showEmail,
        _Show_Home_Phone: groupParticipant._showHomePhone,
        _Show_Mobile_Phone: groupParticipant._showMobilePhone,
        _Show_Address: groupParticipant._showAddress,
        _Show_Photo: groupParticipant._showPhoto,
    };
}
