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
  readonly _firstAttendanceEver: null | string;
  readonly _secondAttendanceEver: null | string;
  readonly _thirdAttendanceEver: null | string;
  readonly _lastAttendanceEver: null | string;
  subStatusName: null | string;
  statusDate: null | string;
  formerDenomination: null | string;
  formerChurch: null | string;
  readonly _backgroundCheckInformation: null | string;
  readonly _backgroundCheckType: null | string;
  readonly _backgroundCheckStatus: null | string;
  readonly _backgroundCheckDate: null | string;
  sacramentInformation: null | string;
  churchOfRecord: null | string;
  baptismParishName: null | string;
  baptismParishAddress: null | string;
  birthCertificateAddress: null | string;
  birthCertificateCity: null | string;
  birthCertificateState: null | string;
}