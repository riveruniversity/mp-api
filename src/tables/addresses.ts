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

export function mapAddressRecord(addressRecord: AddressRecord): Address {
    return {
        addressID: addressRecord.Address_ID,
        addressLine1: addressRecord.Address_Line_1,
        addressLine2: addressRecord.Address_Line_2,
        city: addressRecord.City,
        stateRegion: addressRecord['State/Region'],
        postalCode: addressRecord.Postal_Code,
        foreignCountry: addressRecord.Foreign_Country,
        countryCode: addressRecord.Country_Code,
        carrierRoute: addressRecord.Carrier_Route,
        lotNumber: addressRecord.Lot_Number,
        deliveryPointCode: addressRecord.Delivery_Point_Code,
        deliveryPointCheckDigit: addressRecord.Delivery_Point_Check_Digit,
        latitude: addressRecord.Latitude,
        longitude: addressRecord.Longitude,
        altitude: addressRecord.Altitude,
        timeZone: addressRecord.Time_Zone,
        barCode: addressRecord.Bar_Code,
        areaCode: addressRecord.Area_Code,
        lastValidationAttempt: addressRecord.Last_Validation_Attempt,
        county: addressRecord.County,
        validated: addressRecord.Validated,
        doNotValidate: addressRecord.Do_Not_Validate,
        lastGeoCodeAttempt: addressRecord.Last_GeoCode_Attempt,
        country: addressRecord.Country,
    };
}

export function mapAddressToAddressRecord(address: Address): AddressRecord {
    return {
        Address_ID: address.addressID,
        Address_Line_1: address.addressLine1,
        Address_Line_2: address.addressLine2,
        City: address.city,
        ['State/Region']: address.stateRegion,
        Postal_Code: address.postalCode,
        Foreign_Country: address.foreignCountry,
        Country_Code: address.countryCode,
        Carrier_Route: address.carrierRoute,
        Lot_Number: address.lotNumber,
        Delivery_Point_Code: address.deliveryPointCode,
        Delivery_Point_Check_Digit: address.deliveryPointCheckDigit,
        Latitude: address.latitude,
        Longitude: address.longitude,
        Altitude: address.altitude,
        Time_Zone: address.timeZone,
        Bar_Code: address.barCode,
        Area_Code: address.areaCode,
        Last_Validation_Attempt: address.lastValidationAttempt,
        County: address.county,
        Validated: address.validated,
        Do_Not_Validate: address.doNotValidate,
        Last_GeoCode_Attempt: address.lastGeoCodeAttempt,
        Country: address.country,
    };
}
