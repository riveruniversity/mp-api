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

export function mapHouseholdRecord(householdRecord: HouseholdRecord): Household {
    return {
        householdID: householdRecord.Household_ID,
        householdName: householdRecord.Household_Name,
        addressID: householdRecord.Address_ID,
        homePhone: householdRecord.Home_Phone,
        congregationID: householdRecord.Congregation_ID,
        carePerson: householdRecord.Care_Person,
        householdSourceID: householdRecord.Household_Source_ID,
        familyCallNumber: householdRecord.Family_Call_Number,
        householdPreferences: householdRecord.Household_Preferences,
        homePhoneUnlisted: householdRecord.Home_Phone_Unlisted,
        homeAddressUnlisted: householdRecord.Home_Address_Unlisted,
        bulkMailOptOut: householdRecord.Bulk_Mail_Opt_Out,
        firstDonation: householdRecord._First_Donation,
        lastDonation: householdRecord._Last_Donation,
        lastActivity: householdRecord._Last_Activity,
        seasonalAlternateAddressSettings: householdRecord.Seasonal_Alternate_Address_Settings,
        alternateMailingAddress: householdRecord.Alternate_Mailing_Address,
        seasonStart: householdRecord.Season_Start,
        seasonEnd: householdRecord.Season_End,
        repeatsAnnually: householdRecord.Repeats_Annually,
        endSeasonalAlternateAddressSettings: householdRecord.End_Seasonal_Alternate_Address_Settings,
        congregationDriveTime: householdRecord.Congregation_Drive_Time,
        drivingDistance: householdRecord.Driving_Distance,
        drivingTime: householdRecord.Driving_Time,
    };
}

export function mapHouseholdToHouseholdRecord(household: Household): HouseholdRecord {
    return {
        Household_ID: household.householdID,
        Household_Name: household.householdName,
        Address_ID: household.addressID,
        Home_Phone: household.homePhone,
        Congregation_ID: household.congregationID,
        Care_Person: household.carePerson,
        Household_Source_ID: household.householdSourceID,
        Family_Call_Number: household.familyCallNumber,
        Household_Preferences: household.householdPreferences,
        Home_Phone_Unlisted: household.homePhoneUnlisted,
        Home_Address_Unlisted: household.homeAddressUnlisted,
        Bulk_Mail_Opt_Out: household.bulkMailOptOut,
        _First_Donation: household.firstDonation,
        _Last_Donation: household.lastDonation,
        _Last_Activity: household.lastActivity,
        Seasonal_Alternate_Address_Settings: household.seasonalAlternateAddressSettings,
        Alternate_Mailing_Address: household.alternateMailingAddress,
        Season_Start: household.seasonStart,
        Season_End: household.seasonEnd,
        Repeats_Annually: household.repeatsAnnually,
        End_Seasonal_Alternate_Address_Settings: household.endSeasonalAlternateAddressSettings,
        Congregation_Drive_Time: household.congregationDriveTime,
        Driving_Distance: household.drivingDistance,
        Driving_Time: household.drivingTime,
    };
}
