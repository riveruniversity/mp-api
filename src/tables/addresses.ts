export interface AddressRecord {
    Address_ID: number;
    Address_Line_1: string;
    Address_Line_2: string;
    City: string;
    'State/Region': string;
    Postal_Code: string;
    Foreign_Country: null | string;
    Country_Code: string;
    Carrier_Route: null | string;
    Lot_Number: null | string;
    Delivery_Point_Code: null | string;
    Delivery_Point_Check_Digit: null | string;
    Latitude: null | number;
    Longitude: null | number;
    Altitude: null | number;
    Time_Zone: null | string;
    Bar_Code: null | string;
    Area_Code: null | string;
    Last_Validation_Attempt: null | string;
    County: string;
    Validated: null | string;
    Do_Not_Validate: boolean;
    Last_GeoCode_Attempt: null | string;
    Country: null | string;
}

export interface Address {
    addressID: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    stateRegion: string;
    postalCode: string;
    foreignCountry: null | string;
    countryCode: string;
    carrierRoute: null | string;
    lotNumber: null | string;
    deliveryPointCode: null | string;
    deliveryPointCheckDigit: null | string;
    latitude: null | number;
    longitude: null | number;
    altitude: null | number;
    timeZone: null | string;
    barCode: null | string;
    areaCode: null | string;
    lastValidationAttempt: null | string;
    county: string;
    validated: null | string;
    doNotValidate: boolean;
    lastGeoCodeAttempt: null | string;
    country: null | string;
}