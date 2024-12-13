import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { URLSearchParams } from 'url';
import { Contact, mapContactToContactRecord } from './tables/contacts';
import { Participant, mapParticipantToParticipantRecord, } from './tables/participants';
import { EventParticipant, mapEventParticipantToEventParticipantRecord, } from './tables/event-participants';
import { GroupParticipant, mapGroupParticipantToGroupParticipantRecord, } from './tables/group-participants';
import { Event } from './tables/events';
import { Group } from './tables/groups';
import { ContactRecord } from './tables/contacts';
import { mapContactRecord } from './tables/contacts';
import { mapParticipantRecord } from './tables/participants';
import { ParticipantRecord } from './tables/participants';
import { EventRecord } from './tables/events';
import { mapEventRecord } from './tables/events';
import { GroupRecord } from './tables/groups';
import { mapGroupRecord } from './tables/groups';
import { mapEventParticipantRecord } from './tables/event-participants';
import { EventParticipantRecord } from './tables/event-participants';
import { GroupParticipantRecord } from './tables/group-participants';
import { mapGroupParticipantRecord } from './tables/group-participants';
import { Household, HouseholdRecord, mapHouseholdRecord, mapHouseholdToHouseholdRecord, } from './tables/households';
import { Address, AddressRecord, mapAddressRecord, mapAddressToAddressRecord } from './tables/addresses';
import { ContactAttribute, ContactAttributeRecord, mapContactAttributeRecord, mapContactAttributeToContactAttributeRecord } from './tables/contact-attributes';

interface TokenData {
    access_token: string;
    expires_in: number;
    token_type: 'Bearer';
}

interface AccessToken {
    digest: string;
    expiration: number;
}

const createTokenGetter = (auth: { username: string; password: string; }) => {
    let token: AccessToken | undefined;

    return async () => {
        // If the token is near expiration, get a new one.
        if (!token || token.expiration - 60000 < Date.now()) {
            const tokenRes = await axios.post<TokenData>(
                'https://mp.revival.com/ministryplatformapi/oauth/connect/token',
                new URLSearchParams({
                    grant_type: 'client_credentials',
                    scope: 'http://www.thinkministry.com/dataplatform/scopes/all',
                }).toString(),
                { auth }
            );
            const [, payload] = tokenRes.data.access_token.split('.');
            try {
                const jsonPayload: { exp: number; } = JSON.parse(
                    Buffer.from(payload, 'base64url').toString()
                );
                token = {
                    digest: tokenRes.data.access_token,
                    expiration: jsonPayload.exp * 1000,
                };
                return token.digest;
            } catch (err) {
                console.error(err);
            }
        } else {
            return token.digest;
        }
    };
};

type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type CreateContactParams = WithRequired<
    Partial<Contact>,
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

export type MPGetOptions = {
    select?: string;
    filter?: string;
    orderBy?: string;
    groupBy?: string;
    top?: number;
    skip?: number;
    distinct?: boolean;
};

export type MPCreateOptions = {
    user?: number;
};

export type MPUpdateOptions = MPCreateOptions;
export type MPGetInstance = <T = any, R = AxiosResponse<T, any>>(url: string, mpOptions?: MPGetOptions, config?: AxiosRequestConfig) => Promise<R>;
export type MPInstance = {
    get: MPGetInstance; // - AxiosInstance['get']
    post: AxiosInstance['post'];
    put: AxiosInstance['put'];
    getContact(
        id: number,
        options?: MPGetOptions
    ): Promise<Contact | undefined | { error: any; }>;
    getHousehold(
        id: number,
        options?: MPGetOptions
    ): Promise<Household | undefined | { error: any; }>;
    getAddress(
        id: number,
        options?: MPGetOptions
    ): Promise<Address | undefined | { error: any; }>;
    getParticipant(
        id: number,
        options?: MPGetOptions
    ): Promise<Participant | undefined | { error: any; }>;
    getEvent(
        id: number,
        options?: MPGetOptions
    ): Promise<Event | undefined | { error: any; }>;
    getGroup(
        id: number,
        options?: MPGetOptions
    ): Promise<Group | undefined | { error: any; }>;
    getEventParticipant(
        id: number,
        options?: MPGetOptions
    ): Promise<EventParticipant | undefined | { error: any; }>;
    getGroupParticipant(
        id: number,
        options?: MPGetOptions
    ): Promise<GroupParticipant | undefined | { error: any; }>;

    getContacts(
        options?: MPGetOptions
    ): Promise<Contact[] | { error: any; }>;
    getHouseholds(
        options?: MPGetOptions
    ): Promise<Household[] | { error: any; }>;
    getAddresses(
        options?: MPGetOptions
    ): Promise<Address[] | { error: any; }>;
    getParticipants(
        options?: MPGetOptions
    ): Promise<Participant[] | { error: any; }>;
    getEvents(options?: MPGetOptions): Promise<Event[] | { error: any; }>;
    getGroups(options?: MPGetOptions): Promise<Group[] | { error: any; }>;
    getEventParticipants(
        options?: MPGetOptions
    ): Promise<EventParticipant[] | { error: any; }>;
    getGroupParticipants(
        options?: MPGetOptions
    ): Promise<GroupParticipant[] | { error: any; }>;

    createContact(
        params: CreateContactParams,
        options?: MPCreateOptions
    ): Promise<Contact | { error: any; }>;
    createHousehold(
        params: CreateHouseholdParams,
        options?: MPCreateOptions
    ): Promise<Household | { error: any; }>;
    createAddress(
        params: CreateAddressParams,
        options?: MPCreateOptions
    ): Promise<Address | { error: any; }>;
    createParticipant(
        params: CreateParticipantParams,
        options?: MPCreateOptions
    ): Promise<Participant | { error: any; }>;
    createEventParticipant(
        params: CreateEventParticipantParams,
        options?: MPCreateOptions
    ): Promise<EventParticipant | { error: any; }>;
    createGroupParticipant(
        params: CreateGroupParticipantParams,
        options?: MPCreateOptions
    ): Promise<GroupParticipant | { error: any; }>;
    createContactAttribute(
        params: CreateContactAttributeParams,
        options?: MPCreateOptions
    ): Promise<ContactAttribute | { error: any; }>;

    updateContacts(
        contacts: WithRequired<Partial<Contact>, 'contactID'>[],
        options?: MPUpdateOptions
    ): Promise<Contact[] | { error: any; }>;

    updateEventParticipants(
        participants: WithRequired<Partial<EventParticipant>, 'eventParticipantID'>[],
        options?: MPUpdateOptions
    ): Promise<EventParticipant[] | { error: any; }>;
};

const stringifyMPOptions = (mpOptions: MPGetOptions | MPCreateOptions | MPUpdateOptions = {}) =>
    Object.entries(mpOptions).reduce((acc, [key, value]) => {
        if (!acc) {
            acc += `?$${key}=${value}`;
        } else {
            acc += `&$${key}=${value}`;
        }
        return acc;
    }, '').escapeSql();

export const createMPInstance = ({ auth }: { auth: { username: string; password: string; }; }): MPInstance => {
    /**
     * Gets MP oauth token.
     * @returns token
     */
    const getToken = createTokenGetter(auth);
    const api = axios.create({
        baseURL: 'https://mp.revival.com/ministryplatformapi',
    });

    const get = async <T = any, R = AxiosResponse<T, any>>(
        url: string,
        mpOptions: MPGetOptions,
        config?: AxiosRequestConfig
    ) =>
        api.get<T, R>(url + stringifyMPOptions(mpOptions), {
            ...config,
            headers: {
                ...config?.headers,
                Authorization: `Bearer ${await getToken()}`,
            },
        });
    const post = async <T, R = AxiosResponse<T, any>>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ) =>
        api.post<T, R>(url, data, {
            ...config,
            headers: {
                ...config?.headers,
                Authorization: `Bearer ${await getToken()}`,
            },
        });
    const put = async <T, R = AxiosResponse<T, any>>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ) =>
        api.put<T, R>(url, data, {
            ...config,
            headers: {
                ...config?.headers,
                Authorization: `Bearer ${await getToken()}`,
            },
        });

    return {
        get,
        post,
        put,
        async getContact(id, options = {}) {
            try {
                const res = await get<[ContactRecord?]>(
                    `/tables/contacts/${id}`, options
                );
                return res.data[0] ? mapContactRecord(res.data[0]) : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getHousehold(id, options = {}) {
            try {
                const res = await get<[HouseholdRecord?]>(
                    `/tables/households/${id}`, options
                );
                return res.data[0]
                    ? mapHouseholdRecord(res.data[0])
                    : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getAddress(id, options = {}) {
            try {
                const res = await get<[AddressRecord?]>(
                    `/tables/addresses/${id}`, options
                );
                return res.data[0] ? mapAddressRecord(res.data[0]) : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getParticipant(id, options = {}) {
            try {
                const res = await get<[ParticipantRecord?]>(
                    `/tables/participants/${id}`, options
                );
                return res.data[0]
                    ? mapParticipantRecord(res.data[0])
                    : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getEvent(id, options = {}) {
            try {
                const res = await get<[EventRecord?]>(
                    `/tables/events/${id}`, options
                );
                return res.data[0] ? mapEventRecord(res.data[0]) : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getGroup(id, options = {}) {
            try {
                const res = await get<[GroupRecord?]>(
                    `/tables/groups/${id}`, options
                );
                return res.data[0] ? mapGroupRecord(res.data[0]) : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getEventParticipant(id, options = {}) {
            try {
                const res = await get<[EventParticipantRecord?]>(
                    `/tables/event_participants/${id}`, options
                );
                return res.data[0]
                    ? mapEventParticipantRecord(res.data[0])
                    : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getGroupParticipant(id, options = {}) {
            try {
                const res = await get<[GroupParticipantRecord?]>(
                    `/tables/group_participants/${id}`, options
                );
                return res.data[0]
                    ? mapGroupParticipantRecord(res.data[0])
                    : undefined;
            } catch (err) {
                return { error: err };
            }
        },
        async getContacts(options = {}) {
            try {
                const res = await get<ContactRecord[]>(
                    `/tables/contacts`, options
                );
                return res.data.map(mapContactRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async getHouseholds(options = {}) {
            try {
                const res = await get<HouseholdRecord[]>(
                    `/tables/households`, options
                );
                return res.data.map(mapHouseholdRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async getAddresses(options = {}) {
            try {
                const res = await get<AddressRecord[]>(
                    `/tables/addresses`, options
                );
                return res.data.map(mapAddressRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async getParticipants(options = {}) {
            try {
                const res = await get<ParticipantRecord[]>(
                    `/tables/participants`, options
                );
                return res.data.map(mapParticipantRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async getEvents(options = {}) {
            try {
                const res = await get<EventRecord[]>(`/tables/events`, options);
                return res.data.map(mapEventRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async getGroups(options = {}) {
            try {
                const res = await get<GroupRecord[]>(`/tables/groups`, options);
                return res.data.map(mapGroupRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async getEventParticipants(options = {}) {
            try {
                const res = await get<EventParticipantRecord[]>(
                    `/tables/event_participants`, options
                );
                return res.data.map(mapEventParticipantRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async getGroupParticipants(options = {}) {
            try {
                const res = await get<GroupParticipantRecord[]>(
                    `/tables/group_participants`, options
                );
                return res.data.map(mapGroupParticipantRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async createContact(params, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await post<[ContactRecord]>(
                    `/tables/contacts${query}`,
                    [mapContactToContactRecord(params as Contact)]
                );
                return mapContactRecord(res.data[0]);
            } catch (err) {
                return { error: err };
            }
        },
        async createHousehold(params, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await post<[HouseholdRecord]>(
                    `/tables/households${query}`,
                    [mapHouseholdToHouseholdRecord(params as Household)]
                );
                return mapHouseholdRecord(res.data[0]);
            } catch (err) {
                return { error: err };
            }
        },
        async createAddress(params, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await post<[AddressRecord]>(
                    `/tables/addresses${query}`,
                    [mapAddressToAddressRecord(params as Address)]
                );
                return mapAddressRecord(res.data[0]);
            } catch (err) {
                return { error: err };
            }
        },
        async createParticipant(params, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await post<[ParticipantRecord]>(
                    `/tables/participants${query}`,
                    [mapParticipantToParticipantRecord(params as Participant)]
                );
                return mapParticipantRecord(res.data[0]);
            } catch (err) {
                return { error: err };
            }
        },
        async createEventParticipant(params, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await post<[EventParticipantRecord]>(
                    `/tables/event_participants${query}`,
                    [
                        mapEventParticipantToEventParticipantRecord(
                            params as EventParticipant
                        ),
                    ]
                );
                return mapEventParticipantRecord(res.data[0]);
            } catch (err) {
                return { error: err };
            }
        },
        async createGroupParticipant(params, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await post<[GroupParticipantRecord]>(
                    `/tables/group_participants${query}`,
                    [
                        mapGroupParticipantToGroupParticipantRecord(
                            params as GroupParticipant
                        ),
                    ]
                );
                return mapGroupParticipantRecord(res.data[0]);
            } catch (err) {
                return { error: err };
            }
        },
        async createContactAttribute(params, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await post<[ContactAttributeRecord]>(
                    `/tables/contact_attributes${query}`,
                    [
                        mapContactAttributeToContactAttributeRecord(
                            params as ContactAttribute
                        ),
                    ]
                );
                return mapContactAttributeRecord(res.data[0]);
            } catch (err) {
                return { error: err };
            }
        },
        async updateContacts(contacts, options = {}) {
            const query = stringifyMPOptions(options);
            try {
                const res = await put<ContactRecord[]>(
                    `/tables/contacts${query}`,
                    contacts.map(mapContactToContactRecord)
                );
                return res.data.map(mapContactRecord);
            } catch (err) {
                return { error: err };
            }
        },
        async updateEventParticipants(eventParticipants, options = {}) {
            try {
                const res = await put<EventParticipantRecord[]>(
                    `/tables/event_participants`,
                    eventParticipants.map(mapEventParticipantToEventParticipantRecord)
                );
                return res.data.map(mapEventParticipantRecord);
            } catch (err) {
                return { error: err };
            }
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
    ContactAttribute
};
