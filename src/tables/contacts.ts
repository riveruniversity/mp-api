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

export const mapContactRecord = (record: ContactRecord): Contact => ({
    contactID: record.Contact_ID,
    company: record.Company,
    companyName: record.Company_Name,
    displayName: record.Display_Name,
    prefixID: record.Prefix_ID,
    firstName: record.First_Name,
    middleName: record.Middle_Name,
    lastName: record.Last_Name,
    suffixID: record.Suffix_ID,
    nickname: record.Nickname,
    dateOfBirth: record.Date_of_Birth,
    genderID: record.Gender_ID,
    maritalStatusID: record.Marital_Status_ID,
    contactStatusID: record.Contact_Status_ID,
    householdID: record.Household_ID,
    householdPositionID: record.Household_Position_ID,
    anniversaryDate: record.Anniversary_Date,
    dateOfDeath: record.Date_of_Death,
    participantRecord: record.Participant_Record,
    donorRecord: record.Donor_Record,
    emailAddress: record.Email_Address,
    mobilePhone: record.Mobile_Phone,
    companyPhone: record.Company_Phone,
    pagerPhone: record.Pager_Phone,
    faxPhone: record.Fax_Phone,
    facebookAccount: record.Facebook_Account,
    twitterAccount: record.Twitter_Account,
    webPage: record.Web_Page,
    industryID: record.Industry_ID,
    occupationID: record.Occupation_ID,
    hsGraduationYear: record.HS_Graduation_Year,
    bulkEmailOptOut: record.Bulk_Email_Opt_Out,
    emailUnlisted: record.Email_Unlisted,
    doNotText: record.Do_Not_Text,
    mobilePhoneUnlisted: record.Mobile_Phone_Unlisted,
    removeFromDirectory: record.Remove_From_Directory,
    userAccount: record.User_Account,
    idCard: record.ID_Card,
    contactGUID: record.Contact_GUID,
    _contactSetupDate: record._Contact_Setup_Date,
    occupationName: record.Occupation_Name,
    emailVerified: record.Email_Verified,
    mobilePhoneVerified: record.Mobile_Phone_Verified,
    maidenName: record.Maiden_Name,

    professionalInformation: record.Professional_Information,
    contactMethods: record.Contact_Methods,
    currentSchool: record.Current_School,
    otherInformation: record.Other_Information,
    communicationPreferences: record.Communication_Preferences,
});

export const mapContactToContactRecord = <
    T extends Contact | Partial<Contact> = Contact
>(
    contact: Contact | Partial<Contact>
): T extends Contact ? ContactRecord : Partial<ContactRecord> => {
    const mappings = {
        contactID: 'Contact_ID',
        company: 'Company',
        companyName: 'Company_Name',
        displayName: 'Display_Name',
        prefixID: 'Prefix_ID',
        firstName: 'First_Name',
        middleName: 'Middle_Name',
        lastName: 'Last_Name',
        suffixID: 'Suffix_ID',
        nickname: 'Nickname',
        dateOfBirth: 'Date_of_Birth',
        genderID: 'Gender_ID',
        maritalStatusID: 'Marital_Status_ID',
        contactStatusID: 'Contact_Status_ID',
        householdID: 'Household_ID',
        householdPositionID: 'Household_Position_ID',
        anniversaryDate: 'Anniversary_Date',
        dateOfDeath: 'Date_of_Death',
        participantRecord: 'Participant_Record',
        donorRecord: 'Donor_Record',
        emailAddress: 'Email_Address',
        mobilePhone: 'Mobile_Phone',
        companyPhone: 'Company_Phone',
        pagerPhone: 'Pager_Phone',
        faxPhone: 'Fax_Phone',
        facebookAccount: 'Facebook_Account',
        twitterAccount: 'Twitter_Account',
        webPage: 'Web_Page',
        industryID: 'Industry_ID',
        occupationID: 'Occupation_ID',
        hsGraduationYear: 'HS_Graduation_Year',
        bulkEmailOptOut: 'Bulk_Email_Opt_Out',
        emailUnlisted: 'Email_Unlisted',
        doNotText: 'Do_Not_Text',
        mobilePhoneUnlisted: 'Mobile_Phone_Unlisted',
        removeFromDirectory: 'Remove_From_Directory',
        userAccount: 'User_Account',
        idCard: 'ID_Card',
        contactGUID: 'Contact_GUID',
        _contactSetupDate: '_Contact_Setup_Date',
        occupationName: 'Occupation_Name',
        emailVerified: 'Email_Verified',
        mobilePhoneVerified: 'Mobile_Phone_Verified',
        maidenName: 'Maiden_Name',
        professionalInformation: 'Professional_Information',
        contactMethods: 'Contact_Methods',
        currentSchool: 'Current_School',
        otherInformation: 'Other_Information',
        communicationPreferences: 'Communication_Preferences',
    };

    let contactRecord: Partial<ContactRecord> = {};
    for (const key in contact) {
        contactRecord[mappings[key]] = contact[key];
    }

    return contactRecord as ContactRecord;
};
