import { createApiBase, MPApiBase, ErrorDetails, MPGetOptions, MPCreateOptions, MPUpdateOptions } from './api';
import { convertToCamelCase, convertToSnakeCase, escapeSql, stringifyURLParams } from './utils/strings';
import { Contact, ContactRecord } from './tables/contacts';
import { Event, EventRecord } from './tables/events';
import { Group, GroupRecord } from './tables/groups';
import { Address, AddressRecord } from './tables/addresses';
import { Household, HouseholdRecord } from './tables/households';
import { Participant, ParticipantRecord } from './tables/participants';
import { EventParticipant, EventParticipantRecord } from './tables/event-participants';
import { GroupParticipant, GroupParticipantRecord } from './tables/group-participants';
import { ContactAttribute, ContactAttributeRecord } from './tables/contact-attributes';
import { FormResponse, FormResponseRecord } from './tables/form-responses';
import { FormResponseAnswer } from './tables/from-response-answers';
import { AxiosInstance } from 'axios';


type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;


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


export type MPInstance = {

  get: AxiosInstance['get'];
  put: AxiosInstance['put'];
  post: AxiosInstance['post'];
  create: MPApiBase['create'];
  update: MPApiBase['update'];
  getOne: MPApiBase['getOne'];
  getMultiple: MPApiBase['getMultiple'];

  getContact(
    id: number,
    options?: MPGetOptions
  ): Promise<Contact | undefined | { error: ErrorDetails; }>;
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
  getContactAttribute(
    id: number,
    options?: MPGetOptions
  ): Promise<ContactAttribute | undefined | { error: ErrorDetails; }>;
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
    options?: MPGetOptions
  ): Promise<Contact[] | { error: ErrorDetails; }>;
  getHouseholds(
    options?: MPGetOptions
  ): Promise<Household[] | { error: ErrorDetails; }>;
  getAddresses(
    options?: MPGetOptions
  ): Promise<Address[] | { error: ErrorDetails; }>;
  getParticipants(
    options?: MPGetOptions
  ): Promise<Participant[] | { error: ErrorDetails; }>;
  getEvents(options?: MPGetOptions): Promise<Event[] | { error: ErrorDetails; }>;
  getGroups(options?: MPGetOptions): Promise<Group[] | { error: ErrorDetails; }>;
  getEventParticipants(
    options?: MPGetOptions
  ): Promise<EventParticipant[] | { error: ErrorDetails; }>;
  getGroupParticipants(
    options?: MPGetOptions
  ): Promise<GroupParticipant[] | { error: ErrorDetails; }>;

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
    params: CreateFormResponseAnswerParams,
    options?: MPCreateOptions
  ): Promise<FormResponseAnswer | { error: ErrorDetails; }>;
  
  updateContacts(
    contacts: WithRequired<Partial<Contact>, 'contactID'>[],
    options?: MPUpdateOptions
  ): Promise<Contact[] | { error: ErrorDetails; }>;
  updateEventParticipants(
    participants: WithRequired<Partial<EventParticipant>, 'eventParticipantID'>[],
    options?: MPUpdateOptions
  ): Promise<EventParticipant[] | { error: ErrorDetails; }>;
};


export const createMPInstance = ({ auth }: { auth: { username: string; password: string; }; }): MPInstance => {

  const { getOne, getMultiple, create, update, get, post, put, getError } = createApiBase({ auth });

  return {
    getOne,
    getMultiple,
    create,
    update,
    get,
    post,
    put,
    async getContact(id, mpOptions = {}) {
      return getOne<ContactRecord, Contact>(
        { path: `/tables/contacts`, id, mpOptions }
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
    async getContactAttribute(id, mpOptions = {}) {
      return getOne<ContactAttributeRecord, ContactAttribute>(
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
    async getContacts(mpOptions = {}) {
      return getMultiple<ContactRecord, Contact>(
        { path: `/tables/contacts`, mpOptions }
      );
    },
    async getHouseholds(mpOptions = {}) {
      return getMultiple<HouseholdRecord, Household>(
        { path: `/tables/households`, mpOptions }
      );
    },
    async getAddresses(mpOptions = {}) {
      return getMultiple<AddressRecord, Address>(
        { path: `/tables/addresses`, mpOptions }
      );
    },
    async getParticipants(mpOptions = {}) {
      return getMultiple<ParticipantRecord, Participant>(
        { path: `/tables/participants`, mpOptions }
      );
    },
    async getEvents(mpOptions = {}) {
      return getMultiple<EventRecord, Event>(
        { path: `/tables/events`, mpOptions }
      );
    },
    async getGroups(mpOptions = {}) {
      return getMultiple<GroupRecord, Group>(
        { path: `/tables/groups`, mpOptions }
      );
    },
    async getEventParticipants(mpOptions = {}) {
      return getMultiple<EventParticipantRecord, EventParticipant>(
        { path: `/tables/event_participants`, mpOptions }
      );
    },
    async getGroupParticipants(mpOptions = {}) {
      return getMultiple<GroupParticipantRecord, GroupParticipant>(
        { path: `/tables/group_participants`, mpOptions }
      );
    },

    async createContact(params, mpOptions = {}) {
      return create<CreateContactParams, Contact>(
        { path: `/tables/contacts`, mpOptions, params }
      );
    },
    async createHousehold(params, mpOptions) {
      return create<CreateHouseholdParams, Household>(
        { path: `/tables/households`, mpOptions, params }
      );
    },
    async createAddress(params, mpOptions) {
      return create<CreateAddressParams, Address>(
        { path: `/tables/addresses`, mpOptions, params }
      );
    },
    async createParticipant(params, mpOptions) {
      return create<CreateParticipantParams, Participant>(
        { path: `/tables/participants`, mpOptions, params }
      );
    },
    async createEventParticipant(params, mpOptions) {
      return create<CreateEventParticipantParams, EventParticipant>(
        { path: `/tables/event_participants`, mpOptions, params }
      );
    },
    async createGroupParticipant(params, mpOptions) {
      return create<CreateGroupParticipantParams, GroupParticipant>(
        { path: `/tables/group_participants`, mpOptions, params }
      );
    },
    async createContactAttribute(params, mpOptions) {
      return create<CreateContactAttributeParams, ContactAttribute>(
        { path: `/tables/contact_attributes`, mpOptions, params }
      );
    },
    async createFormResponse(params: CreateFormResponseParams, mpOptions) {
      return create<CreateFormResponseParams, FormResponse>(
        { path: `/tables/form_responses`, mpOptions, params }
      );
    },
    async createFormResponseAnswers(params, mpOptions) {
      return create<CreateFormResponseAnswerParams, FormResponseAnswer>(
        { path: `/tables/form_response_answers`, mpOptions, params }
      );
    },
    async updateContacts(params, mpOptions) {
      return update<Partial<Contact>, Contact>(
        { path: `/tables/contacts`, mpOptions, params }
      );
    },
    async updateEventParticipants(params, mpOptions) {
      return update<Partial<EventParticipant>, EventParticipant>(
        { path: `/tables/event_participants`, mpOptions, params }
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
  ContactAttribute,
  Household,
  Address,
  FormResponse,
  ErrorDetails,
  convertToCamelCase,
  convertToSnakeCase,
  stringifyURLParams,
  escapeSql
};
