export interface ParticipantRecord {
    Participant_ID: number;
    Red_Flag_Notes: null | string;
    Contact_ID: number;
    Participant_Type_ID: number;
    Member_Status_ID: null | number;
    Participant_Engagement_ID: number;
    Participant_Start_Date: string;
    Participant_End_Date: null | string;
    Notes: string;
    _First_Attendance_Ever: null | string;
    _Second_Attendance_Ever: null | string;
    _Third_Attendance_Ever: null | string;
    _Last_Attendance_Ever: null | string;
    SubStatus_Name: null | string;
    Status_Date: null | string;
    Former_Denomination: null | string;
    Former_Church: null | string;
    _Background_Check_Information: null | string;
    _Background_Check_Type: null | string;
    _Background_Check_Status: null | string;
    _Background_Check_Date: null | string;
    Sacrament_Information: null | string;
    Church_of_Record: null | string;
    Baptism_Parish_Name: null | string;
    Baptism_Parish_Address: null | string;
    Birth_Certificate_Address: null | string;
    Birth_Certificate_City: null | string;
    Birth_Certificate_State: null | string;
}

export interface Participant {
    participantID: number;
    redFlagNotes: null | string;
    contactID: number;
    participantTypeID: number;
    memberStatusID: null | number;
    participantEngagementID: number;
    participantStartDate: string;
    participantEndDate: null | string;
    notes: string;
    firstAttendanceEver: null | string;
    secondAttendanceEver: null | string;
    thirdAttendanceEver: null | string;
    lastAttendanceEver: null | string;
    subStatusName: null | string;
    statusDate: null | string;
    formerDenomination: null | string;
    formerChurch: null | string;
    backgroundCheckInformation: null | string;
    backgroundCheckType: null | string;
    backgroundCheckStatus: null | string;
    backgroundCheckDate: null | string;
    sacramentInformation: null | string;
    churchOfRecord: null | string;
    baptismParishName: null | string;
    baptismParishAddress: null | string;
    birthCertificateAddress: null | string;
    birthCertificateCity: null | string;
    birthCertificateState: null | string;
}

export function mapParticipantRecord(record: ParticipantRecord): Participant {
    return {
        participantID: record.Participant_ID,
        redFlagNotes: record.Red_Flag_Notes,
        contactID: record.Contact_ID,
        participantTypeID: record.Participant_Type_ID,
        memberStatusID: record.Member_Status_ID,
        participantEngagementID: record.Participant_Engagement_ID,
        participantStartDate: record.Participant_Start_Date,
        participantEndDate: record.Participant_End_Date,
        notes: record.Notes,
        firstAttendanceEver: record._First_Attendance_Ever,
        secondAttendanceEver: record._Second_Attendance_Ever,
        thirdAttendanceEver: record._Third_Attendance_Ever,
        lastAttendanceEver: record._Last_Attendance_Ever,
        subStatusName: record.SubStatus_Name,
        statusDate: record.Status_Date,
        formerDenomination: record.Former_Denomination,
        formerChurch: record.Former_Church,
        backgroundCheckInformation: record._Background_Check_Information,
        backgroundCheckType: record._Background_Check_Type,
        backgroundCheckStatus: record._Background_Check_Status,
        backgroundCheckDate: record._Background_Check_Date,
        sacramentInformation: record.Sacrament_Information,
        churchOfRecord: record.Church_of_Record,
        baptismParishName: record.Baptism_Parish_Name,
        baptismParishAddress: record.Baptism_Parish_Address,
        birthCertificateAddress: record.Birth_Certificate_Address,
        birthCertificateCity: record.Birth_Certificate_City,
        birthCertificateState: record.Birth_Certificate_State,
    };
}

export function mapParticipantToParticipantRecord(participant: Participant): ParticipantRecord {
    return {
        Participant_ID: participant.participantID,
        Red_Flag_Notes: participant.redFlagNotes,
        Contact_ID: participant.contactID,
        Participant_Type_ID: participant.participantTypeID,
        Member_Status_ID: participant.memberStatusID,
        Participant_Engagement_ID: participant.participantEngagementID,
        Participant_Start_Date: participant.participantStartDate,
        Participant_End_Date: participant.participantEndDate,
        Notes: participant.notes,
        _First_Attendance_Ever: participant.firstAttendanceEver,
        _Second_Attendance_Ever: participant.secondAttendanceEver,
        _Third_Attendance_Ever: participant.thirdAttendanceEver,
        _Last_Attendance_Ever: participant.lastAttendanceEver,
        SubStatus_Name: participant.subStatusName,
        Status_Date: participant.statusDate,
        Former_Denomination: participant.formerDenomination,
        Former_Church: participant.formerChurch,
        _Background_Check_Information: participant.backgroundCheckInformation,
        _Background_Check_Type: participant.backgroundCheckType,
        _Background_Check_Status: participant.backgroundCheckStatus,
        _Background_Check_Date: participant.backgroundCheckDate,
        Sacrament_Information: participant.sacramentInformation,
        Church_of_Record: participant.churchOfRecord,
        Baptism_Parish_Name: participant.baptismParishName,
        Baptism_Parish_Address: participant.baptismParishAddress,
        Birth_Certificate_Address: participant.birthCertificateAddress,
        Birth_Certificate_City: participant.birthCertificateCity,
        Birth_Certificate_State: participant.birthCertificateState,
    };
}
