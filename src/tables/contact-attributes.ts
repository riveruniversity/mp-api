import { Contact } from "./contacts";

export interface ContactAttributeRecord {
  Contact_Attribute_ID: number;
  Contact_ID: number;
  Attribute_ID: number;
  Start_Date: string;
  End_Date?: string | null;
  Notes?: string | null;
}

export interface ContactAttribute {
  contactAttributeID: number;
  contactID: number;
  attributeID: number;
  startDate: string;
  endDate?: string | null;
  notes?: string | null;
}


export interface ContactWithAttribute extends Contact, ContactAttribute {
}