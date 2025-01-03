import { DateTimeIsoString } from "../api";
import { Contact } from "./contacts";

export interface ContactEmailAddressRecord {
  Email_Address_ID: number;
  Email_Address: string;
  Contact_ID: number;
  Email_Type_ID?: number;
  End_Date?: DateTimeIsoString | null;
  Notes?: string | null;
}

export interface ContactEmailAddress {
  emailAddressID: number;
  emailAddress: string;
  contactID: number;
  emailTypeID?: number;
  endDate?: DateTimeIsoString | null;
  notes?: string | null;
}

export interface ContactWithEmailAddresses extends Contact, Omit<ContactEmailAddress, "emailAddress"> {
  emailAddress: string | null;
  emailAddresses: string[];
}

export interface ContactWithEmailAddress extends ContactWithEmailAddresses { 
  secondEmail: string;
}