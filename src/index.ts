import { AxiosInstance } from 'axios';
import { createApiBase, MPApiBase, ErrorDetails, MPGetOptions, MPCreateOptions, MPUpdateOptions, DateTimeIsoString } from './api';
import { convertToCamelCase, convertToSnakeCase, escapeSql, stringifyURLParams } from './utils/converters';
import { Contact, ContactRecord } from './tables/contacts';
import { Event, EventRecord } from './tables/events';
import { Group, GroupRecord } from './tables/groups';
import { Address, AddressRecord } from './tables/addresses';
import { Household, HouseholdRecord } from './tables/households';
import { Participant, ParticipantRecord } from './tables/participants';
import { EventParticipant, EventParticipantRecord } from './tables/event-participants';
import { GroupParticipant, GroupParticipantRecord } from './tables/group-participants';
import { ContactAttribute, ContactAttributeRecord, ContactWithAttribute } from './tables/contact-attributes';
import { FormResponse, FormResponseRecord } from './tables/form-responses';
import { FormResponseAnswer, FormResponseAnswerRecord } from './tables/from-response-answers';
import { ContactEmailAddress, ContactEmailAddressRecord, ContactWithEmailAddress, ContactWithEmailAddresses } from './tables/contact-email-addresses';


export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type AtLeastOne<T> = { [K in keyof T]-?: Required<Pick<T, K>> }[keyof T];

export type CreateContactParams = WithRequired<
  Omit<Partial<Contact>, 'contactID'>,
  'company' | 'displayName'
>;
export type CreateHouseholdParams = WithRequired<
  Partial<Household>,
  'householdName'
>;
export type CreateAddressParams = WithRequired<
  Partial<Address>,
  'addressLine1'
>;
export type CreateParticipantParams = WithRequired<
  Partial<Participant>,
  'contactID' | 'participantTypeID' | 'participantStartDate'
>;
export type CreateEventParticipantParams = WithRequired<
  Partial<EventParticipant>,
  'eventID' | 'participantID' | 'participationStatusID'
>;
export type CreateGroupParticipantParams = WithRequired<
  Partial<GroupParticipant>,
  'groupID' | 'participantID' | 'groupRoleID' | 'startDate'
>;
export type CreateContactAttributeParams = WithRequired<
  Partial<ContactAttribute>,
  'attributeID' | 'contactID' | 'startDate'
>;
export type CreateFormResponseParams = WithRequired<
  Omit<Partial<FormResponse>, 'formResponseID'>,
  'formID' | 'responseDate'
>;
export type CreateFormResponseAnswerParams = WithRequired<
  Omit<Partial<FormResponseAnswer>, 'formResponseAnswerID'>,
  'formFieldID' | 'formResponseID'
>;
export type CreateContactEmailAddressParams = WithRequired<
  Omit<Partial<ContactEmailAddress>, 'emailAddressID'>,
  'emailAddress' | 'contactID'
>;



export interface ContactDetails extends Contact, Participant, Household {
  householdID: number;
  gender: 'Male' | 'Female' | null;
  memberStatus: string;
  maritalStatus: string;
  imageID: string | null;
}


export type MPInstance = {

  get: AxiosInstance['get'];
  put: AxiosInstance['put'];
  post: AxiosInstance['post'];
  createOne: MPApiBase['createOne'];
  createMany: MPApiBase['createMany'];
  update: MPApiBase['update'];
  getOne: MPApiBase['getOne'];
  getMany: MPApiBase['getMany'];

  getContact(
    id: number,
    options?: MPGetOptions
  ): Promise<Contact | undefined | { error: ErrorDetails; }>;
  getContactDetails(
    id: number,
    options?: MPGetOptions
  ): Promise<ContactDetails | undefined | { error: ErrorDetails; }>;
  getContactAttribute(
    id: number,
    options?: MPGetOptions
  ): Promise<ContactAttribute | undefined | { error: ErrorDetails; }>;
  getContactEmailAddress(
    id: number,
    options?: MPGetOptions
  ): Promise<ContactEmailAddress | undefined | { error: ErrorDetails; }>;
  getHousehold(
    id: number,
    options?: MPGetOptions
  ): Promise<Household | undefined | { error: ErrorDetails; }>;
  getAddress(
    id: number,
    options?: MPGetOptions
  ): Promise<Address | undefined | { error: ErrorDetails; }>;
  getParticipant(
    id: number,
    options?: MPGetOptions
  ): Promise<Participant | undefined | { error: ErrorDetails; }>;
  getEvent(
    id: number,
    options?: MPGetOptions
  ): Promise<Event | undefined | { error: ErrorDetails; }>;
  getGroup(
    id: number,
    options?: MPGetOptions
  ): Promise<Group | undefined | { error: ErrorDetails; }>;
  getEventParticipant(
    id: number,
    options?: MPGetOptions
  ): Promise<EventParticipant | undefined | { error: ErrorDetails; }>;
  getGroupParticipant(
    id: number,
    options?: MPGetOptions
  ): Promise<GroupParticipant | undefined | { error: ErrorDetails; }>;
  getFormResponse(
    id: number,
    options?: MPGetOptions
  ): Promise<FormResponse | undefined | { error: ErrorDetails; }>;

  getContacts(
    options: AtLeastOne<MPGetOptions>
  ): Promise<Contact[] | { error: ErrorDetails; }>;
  getContactAttributes(
    options: AtLeastOne<MPGetOptions>
  ): Promise<ContactAttribute[] | { error: ErrorDetails; }>;
  getContactsWithAttributes(
    options: AtLeastOne<Omit<MPGetOptions, "select">>
  ): Promise<ContactWithAttribute[] | { error: ErrorDetails; }>;
  getContactEmailAddresses(
    options: AtLeastOne<MPGetOptions>
  ): Promise<ContactEmailAddress[] | { error: ErrorDetails; }>;
  getContactsWithEmailAddress(
    options: AtLeastOne<Omit<MPGetOptions, "select">>
  ): Promise<ContactWithEmailAddress[] | { error: ErrorDetails; }>;
  getHouseholds(
    options: AtLeastOne<MPGetOptions>
  ): Promise<Household[] | { error: ErrorDetails; }>;
  getAddresses(
    options: AtLeastOne<MPGetOptions>
  ): Promise<Address[] | { error: ErrorDetails; }>;
  getParticipants(
    options: AtLeastOne<MPGetOptions>
  ): Promise<Participant[] | { error: ErrorDetails; }>;
  getEvents(
    options: AtLeastOne<MPGetOptions>
  ): Promise<Event[] | { error: ErrorDetails; }>;
  getGroups(
    options: AtLeastOne<MPGetOptions>
  ): Promise<Group[] | { error: ErrorDetails; }>;
  getEventParticipants(
    options: AtLeastOne<MPGetOptions>
  ): Promise<EventParticipant[] | { error: ErrorDetails; }>;
  getGroupParticipants(
    options: AtLeastOne<MPGetOptions>
  ): Promise<GroupParticipant[] | { error: ErrorDetails; }>;
  getFormResponseAnswers(
    options: AtLeastOne<MPGetOptions>
  ): Promise<FormResponseAnswer[] | { error: ErrorDetails; }>;

  createContact(
    params: CreateContactParams,
    options?: MPCreateOptions
  ): Promise<Contact | { error: ErrorDetails; }>;
  createHousehold(
    params: CreateHouseholdParams,
    options?: MPCreateOptions
  ): Promise<Household | { error: ErrorDetails; }>;
  createAddress(
    params: CreateAddressParams,
    options?: MPCreateOptions
  ): Promise<Address | { error: ErrorDetails; }>;
  createParticipant(
    params: CreateParticipantParams,
    options?: MPCreateOptions
  ): Promise<Participant | { error: ErrorDetails; }>;
  createEventParticipant(
    params: CreateEventParticipantParams,
    options?: MPCreateOptions
  ): Promise<EventParticipant | { error: ErrorDetails; }>;
  createGroupParticipant(
    params: CreateGroupParticipantParams,
    options?: MPCreateOptions
  ): Promise<GroupParticipant | { error: ErrorDetails; }>;
  createContactAttribute(
    params: CreateContactAttributeParams,
    options?: MPCreateOptions
  ): Promise<ContactAttribute | { error: ErrorDetails; }>;
  createFormResponse(
    params: CreateFormResponseParams,
    options?: MPCreateOptions
  ): Promise<FormResponse | { error: ErrorDetails; }>;
  createFormResponseAnswers(
    params: CreateFormResponseAnswerParams[],
    options?: MPCreateOptions
  ): Promise<FormResponseAnswer[] | { error: ErrorDetails; }>;
  createContactEmailAddress(
    params: CreateContactEmailAddressParams[],
    options?: MPCreateOptions
  ): Promise<ContactEmailAddress[] | { error: ErrorDetails; }>;

  updateContacts(
    contacts: WithRequired<Partial<Contact>, 'contactID'>[],
    options?: MPUpdateOptions
  ): Promise<Contact[] | { error: ErrorDetails; }>;
  updateHouseholds(
    households: WithRequired<Partial<Household>, 'householdID'>[],
    options?: MPUpdateOptions
  ): Promise<Household[] | { error: ErrorDetails; }>;
  updateEventParticipants(
    participants: WithRequired<Partial<EventParticipant>, 'eventParticipantID'>[],
    options?: MPUpdateOptions
  ): Promise<EventParticipant[] | { error: ErrorDetails; }>;
  updateGroupParticipants(
    participants: WithRequired<Partial<GroupParticipant>, 'groupParticipantID'>[],
    options?: MPUpdateOptions
  ): Promise<GroupParticipant[] | { error: ErrorDetails; }>;
  updateFormResponseAnswers(
    participants: WithRequired<Partial<FormResponseAnswer>, 'formResponseAnswerID'>[],
    options?: MPUpdateOptions
  ): Promise<FormResponseAnswer[] | { error: ErrorDetails; }>;
};


export const createMPInstance = ({ auth }: { auth: { username: string; password: string; }; }): MPInstance => {

  const { getOne, getMany, createOne, createMany, update, get, post, put } = createApiBase({ auth });

  return {
    getOne,
    getMany,
    createOne,
    createMany,
    update,
    get,
    post,
    put,
    async getContact(id, mpOptions = {}) {
      return getOne<ContactRecord, Contact>(
        { path: `/tables/contacts`, id, mpOptions }
      );
    },
    async getContactDetails(id, mpOptions) {
      return getOne<ContactRecord, ContactDetails>(
        { path: `/tables/contacts`, id, 
          mpOptions: { ...mpOptions, 
            select: 'Contacts.*, Participant_Record_Table.*, Household_ID_Table.*, Gender_ID_Table.Gender, Participant_Record_Table_Member_Status_ID_Table.Member_Status, Marital_Status_ID_Table.Marital_Status, dp_fileUniqueId as Image_ID' } 
        }
      );
    },
    async getContactAttribute(id, mpOptions = {}) {
      return getOne<ContactAttributeRecord, ContactAttribute>(
        { path: `/tables/contact_attributes`, id, mpOptions }
      );
    },
    async getContactEmailAddress(id, mpOptions = {}) {
      return getOne<ContactEmailAddressRecord, ContactEmailAddress>(
        { path: `/tables/contact_email_addresses`, id, mpOptions }
      );
    },
    async getHousehold(id, mpOptions = {}) {
      return getOne<HouseholdRecord, Household>(
        { path: `/tables/households`, id, mpOptions }
      );
    },
    async getAddress(id, mpOptions = {}) {
      return getOne<AddressRecord, Address>(
        { path: `/tables/addresses`, id, mpOptions }
      );
    },
    async getParticipant(id, mpOptions = {}) {
      return getOne<ParticipantRecord, Participant>(
        { path: `/tables/participants`, id, mpOptions }
      );
    },
    async getEvent(id, mpOptions = {}) {
      return getOne<EventRecord, Event>(
        { path: `/tables/events`, id, mpOptions }
      );
    },
    async getGroup(id, mpOptions = {}) {
      return getOne<GroupRecord, Group>(
        { path: `/tables/groups`, id, mpOptions }
      );
    },
    async getEventParticipant(id, mpOptions = {}) {
      return getOne<EventParticipantRecord, EventParticipant>(
        { path: `/tables/event_participants`, id, mpOptions }
      );
    },
    async getGroupParticipant(id, mpOptions = {}) {
      return getOne<GroupParticipantRecord, GroupParticipant>(
        { path: `/tables/group_participants`, id, mpOptions }
      );
    },
    async getFormResponse(id, mpOptions = {}) {
      return getOne<FormResponseRecord, FormResponse>(
        { path: `/tables/form_responses`, id, mpOptions }
      );
    },
    async getContacts(mpOptions) {
      return getMany<ContactRecord, Contact>(
        { path: `/tables/contacts`, mpOptions }
      );
    },
    async getContactAttributes(mpOptions) {
      return getMany<ContactAttributeRecord, ContactAttribute>(
        { path: `/tables/contact_attributes`, mpOptions }
      );
    },
    async getContactsWithAttributes(mpOptions) {
      return getMany<ContactAttributeRecord, ContactWithAttribute>(
        { path: `/tables/contact_attributes`, 
          mpOptions: { ...mpOptions, select: 'Contact_ID_Table.*, Contact_Attributes.*' } 
        }
      );
    },
    async getContactEmailAddresses(mpOptions) {
      return getMany<ContactEmailAddressRecord, ContactEmailAddress>(
        { path: `/tables/contact_email_addresses`, mpOptions }
      );
    },
    async getContactsWithEmailAddress(mpOptions) {
      return getMany<ContactEmailAddressRecord, ContactWithEmailAddress>(
        { path: `/tables/contact_email_addresses`, 
          mpOptions: { ...mpOptions, 
            select: 'Contact_ID_Table.*, Contact_Email_Addresses.Email_Address As Alternate_Email, Contact_Email_Addresses.*' } 
        }
      );
    },
    async getHouseholds(mpOptions) {
      return getMany<HouseholdRecord, Household>(
        { path: `/tables/households`, mpOptions }
      );
    },
    async getAddresses(mpOptions) {
      return getMany<AddressRecord, Address>(
        { path: `/tables/addresses`, mpOptions }
      );
    },
    async getParticipants(mpOptions) {
      return getMany<ParticipantRecord, Participant>(
        { path: `/tables/participants`, mpOptions }
      );
    },
    async getEvents(mpOptions) {
      return getMany<EventRecord, Event>(
        { path: `/tables/events`, mpOptions }
      );
    },
    async getGroups(mpOptions) {
      return getMany<GroupRecord, Group>(
        { path: `/tables/groups`, mpOptions }
      );
    },
    async getEventParticipants(mpOptions) {
      return getMany<EventParticipantRecord, EventParticipant>(
        { path: `/tables/event_participants`, mpOptions }
      );
    },
    async getGroupParticipants(mpOptions) {
      return getMany<GroupParticipantRecord, GroupParticipant>(
        { path: `/tables/group_participants`, mpOptions }
      );
    },
    async getFormResponseAnswers(mpOptions) {
      return getMany<FormResponseAnswerRecord, FormResponseAnswer>(
        { path: `/tables/form_response_answers`, mpOptions }
      );
    },

    async createContact(params, mpOptions = {}) {
      return createOne<CreateContactParams, Contact>(
        { path: `/tables/contacts`, mpOptions, params }
      );
    },
    async createHousehold(params, mpOptions) {
      return createOne<CreateHouseholdParams, Household>(
        { path: `/tables/households`, mpOptions, params }
      );
    },
    async createAddress(params, mpOptions) {
      return createOne<CreateAddressParams, Address>(
        { path: `/tables/addresses`, mpOptions, params }
      );
    },
    async createParticipant(params, mpOptions) {
      return createOne<CreateParticipantParams, Participant>(
        { path: `/tables/participants`, mpOptions, params }
      );
    },
    async createEventParticipant(params, mpOptions) {
      return createOne<CreateEventParticipantParams, EventParticipant>(
        { path: `/tables/event_participants`, mpOptions, params }
      );
    },
    async createGroupParticipant(params, mpOptions) {
      return createOne<CreateGroupParticipantParams, GroupParticipant>(
        { path: `/tables/group_participants`, mpOptions, params }
      );
    },
    async createContactAttribute(params, mpOptions) {
      return createOne<CreateContactAttributeParams, ContactAttribute>(
        { path: `/tables/contact_attributes`, mpOptions, params }
      );
    },
    async createFormResponse(params: CreateFormResponseParams, mpOptions) {
      return createOne<CreateFormResponseParams, FormResponse>(
        { path: `/tables/form_responses`, mpOptions, params }
      );
    },
    async createFormResponseAnswers(params, mpOptions) {
      return createMany<CreateFormResponseAnswerParams, FormResponseAnswer>(
        { path: `/tables/form_response_answers`, mpOptions, params }
      );
    },
    async createContactEmailAddress(params, mpOptions) {
      return createMany<CreateContactEmailAddressParams, ContactEmailAddress>(
        { path: `/tables/contact_email_addresses`, mpOptions, params }
      );
    },
    async updateContacts(params, mpOptions) {
      return update<Partial<Contact>, Contact>(
        { path: `/tables/contacts`, mpOptions, params }
      );
    },
    async updateHouseholds(params, mpOptions) {
      return update<Partial<Household>, Household>(
        { path: `/tables/households`, mpOptions, params }
      );
    },
    async updateEventParticipants(params, mpOptions) {
      return update<Partial<EventParticipant>, EventParticipant>(
        { path: `/tables/event_participants`, mpOptions, params }
      );
    },
    async updateGroupParticipants(params, mpOptions) {
      return update<Partial<GroupParticipant>, GroupParticipant>(
        { path: `/tables/group_participants`, mpOptions, params }
      );
    },
    async updateFormResponseAnswers(params, mpOptions) {
      return update<Partial<FormResponseAnswer>, FormResponseAnswer>(
        { path: `/tables/form_response_answers`, mpOptions, params }
      );
    },
  };
};

export {
  Contact,
  Participant,
  Event,
  Group,
  EventParticipant,
  GroupParticipant,
  Household,
  Address,
  FormResponse,
  FormResponseAnswer,
  ContactAttribute,
  ContactWithAttribute,
  ContactEmailAddress,
  ContactWithEmailAddress,
  ContactWithEmailAddresses,
  ErrorDetails,
  DateTimeIsoString,
  convertToCamelCase,
  convertToSnakeCase,
  stringifyURLParams,
  escapeSql
};