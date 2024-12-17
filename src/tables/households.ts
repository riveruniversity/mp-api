export interface HouseholdRecord {
    Household_ID: number;
    Household_Name: string;
    Address_ID: number;
    Home_Phone: null | string;
    Congregation_ID: number;
    Care_Person: null | string;
    Household_Source_ID: number;
    Family_Call_Number: number;
    Household_Preferences: null | string;
    Home_Phone_Unlisted: boolean;
    Home_Address_Unlisted: boolean;
    Bulk_Mail_Opt_Out: boolean;
    _First_Donation: null | string;
    _Last_Donation: null | string;
    _Last_Activity: string;
    Seasonal_Alternate_Address_Settings: null | string;
    Alternate_Mailing_Address: null | string;
    Season_Start: null | string;
    Season_End: null | string;
    Repeats_Annually: boolean;
    End_Seasonal_Alternate_Address_Settings: null | string;
    Congregation_Drive_Time: null | string;
    Driving_Distance: null | string;
    Driving_Time: null | string;
}

export interface Household {
    householdID: number;
    householdName: string;
    addressID: number;
    homePhone: null | string;
    congregationID: number;
    carePerson: null | string;
    householdSourceID: number;
    familyCallNumber: number;
    householdPreferences: null | string;
    homePhoneUnlisted: boolean;
    homeAddressUnlisted: boolean;
    bulkMailOptOut: boolean;
    firstDonation: null | string;
    lastDonation: null | string;
    lastActivity: string;
    seasonalAlternateAddressSettings: null | string;
    alternateMailingAddress: null | string;
    seasonStart: null | string;
    seasonEnd: null | string;
    repeatsAnnually: boolean;
    endSeasonalAlternateAddressSettings: null | string;
    congregationDriveTime: null | string;
    drivingDistance: null | string;
    drivingTime: null | string;
}
