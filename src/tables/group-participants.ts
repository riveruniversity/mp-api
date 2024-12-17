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