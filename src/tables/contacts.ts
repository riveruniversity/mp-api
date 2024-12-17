export interface ContactRecord {
    Contact_ID: number;
    Company: boolean;
    Company_Name: string | null;
    Display_Name: string;
    Prefix_ID: number | null;
    First_Name: string | null;
    Middle_Name: string | null;
    Last_Name: string | null;
    Suffix_ID: number | null;
    Nickname: string | null;
    Date_of_Birth: string | null;
    Gender_ID: number | null;
    Marital_Status_ID: number | null;
    Contact_Status_ID: number;
    Household_ID: number | null;
    Household_Position_ID: number | null;
    Anniversary_Date: string | null;
    Date_of_Death: string | null;
    Participant_Record: number | null;
    Donor_Record: number | null;
    Email_Address: string | null;
    Mobile_Phone: string | null;
    Company_Phone: string | null;
    Pager_Phone: string | null;
    Fax_Phone: string | null;
    Facebook_Account: string | null;
    Twitter_Account: string | null;
    Web_Page: string | null;
    Industry_ID: number | null;
    Occupation_ID: number | null;
    HS_Graduation_Year: number | null;
    Bulk_Email_Opt_Out: boolean;
    Email_Unlisted: boolean;
    Do_Not_Text: boolean;
    Mobile_Phone_Unlisted: boolean;
    Remove_From_Directory: boolean;
    User_Account: number | null;
    ID_Card: string | null;
    Contact_GUID: string;
    _Contact_Setup_Date: string;
    Occupation_Name: string | null;
    Email_Verified: boolean;
    Mobile_Phone_Verified: boolean;
    Maiden_Name: string | null;

    Professional_Information: unknown | null;
    Contact_Methods: unknown | null;
    Current_School: unknown | null;
    Other_Information: unknown | null;
    Communication_Preferences: unknown | null;
}

export interface Contact {
    contactID: number;
    company: boolean;
    companyName: string | null;
    displayName: string;
    prefixID: number | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    suffixID: number | null;
    nickname: string | null;
    dateOfBirth: string | null;
    genderID: number | null;
    maritalStatusID: number | null;
    contactStatusID: number;
    householdID: number | null;
    householdPositionID: number | null;
    anniversaryDate: string | null;
    dateOfDeath: string | null;
    participantRecord: number | null;
    donorRecord: number | null;
    emailAddress: string | null;
    mobilePhone: string | null;
    companyPhone: string | null;
    pagerPhone: string | null;
    faxPhone: string | null;
    facebookAccount: string | null;
    twitterAccount: string | null;
    webPage: string | null;
    industryID: number | null;
    occupationID: number | null;
    hsGraduationYear: number | null;
    bulkEmailOptOut: boolean;
    emailUnlisted: boolean;
    doNotText: boolean;
    mobilePhoneUnlisted: boolean;
    removeFromDirectory: boolean;
    userAccount: number | null;
    idCard: string | null;
    contactGUID: string;
    _contactSetupDate: string;
    occupationName: string | null;
    emailVerified: boolean;
    mobilePhoneVerified: boolean;
    maidenName: string | null;

    professionalInformation: unknown | null;
    contactMethods: unknown | null;
    currentSchool: unknown | null;
    otherInformation: unknown | null;
    communicationPreferences: unknown | null;
}
