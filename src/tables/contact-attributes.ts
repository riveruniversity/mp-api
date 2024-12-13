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


export function mapContactAttributeRecord(originalObject: ContactAttributeRecord): ContactAttribute {
  return {
    contactAttributeID: originalObject.Contact_Attribute_ID,
    contactID: originalObject.Contact_ID,
    attributeID: originalObject.Attribute_ID,
    startDate: originalObject.Start_Date,
    endDate: originalObject.End_Date,
    notes: originalObject.Notes
  };
}

export function mapContactAttributeToContactAttributeRecord(contactAttribute: ContactAttribute): ContactAttributeRecord {
  return {
    Contact_Attribute_ID: contactAttribute.contactAttributeID,
    Contact_ID: contactAttribute.contactID,
    Attribute_ID: contactAttribute.attributeID,
    Start_Date: contactAttribute.startDate,
    End_Date: contactAttribute.endDate,
    Notes: contactAttribute.notes
  };
}
