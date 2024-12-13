import { createMPInstance } from '../src/index';
import * as dotenv from 'dotenv';
import * as assert from 'assert';
import AxiosError from 'axios/lib/core/AxiosError';
import { v4 } from 'uuid';

dotenv.config();

const { MP_USERNAME, MP_PASSWORD } = process.env as {
    MP_USERNAME: string;
    MP_PASSWORD: string;
};

const mp = createMPInstance({
    auth: { username: MP_USERNAME, password: MP_PASSWORD },
});

describe('MP Instance', function () {
    it('should find many contacts by filter', async function () {
        const contacts = await mp.getContacts({
            filter: 'Last_Name LIKE \'Ferreira\'',
        });
        if ('error' in contacts) {
            const { error } = contacts;
            if (
                typeof error === 'object' &&
                error !== null &&
                'response' in error &&
                typeof error.response === 'object' &&
                error.response !== null &&
                'data' in error.response
            ) {
                console.error(error.response.data);
            } else {
                console.error(error);
            }
            assert.fail();
        } else {
            assert(contacts instanceof Array, 'response is an array');
            assert(contacts.length > 0, 'array length is greater than 0');
        }
    });
    it('should find one contact by id', async function () {
        const contactID = 111129;
        const contact = await mp.findOneContact(contactID);
        if (!contact) {
            assert.fail('no contact found');
        } else if ('error' in contact) {
            const { error } = contact;
            if (error instanceof Error) {
                assert.fail(error);
            } else {
                assert.fail(`Error: ${JSON.stringify(error, null, 2)}`);
            }
        } else {
            assert.equal(contact.firstName, 'Daniel', 'contact first name is Daniel');
            assert.equal(contact.middleName, 'Barbosa', 'contact middle name is Barbosa');
            assert.equal(contact.lastName, 'Ferreira', 'contact last name is Ferreira');
        }
    });
    it('should find many events with options: filter, select, top', async function () {
        const events = await mp.getEvents({
            filter: `Event_Start_Date <= '2022-12-31' AND Event_Start_Date >= '2022-01-01'`,
            select: 'Event_ID,Event_Title,Event_Start_Date',
            top: 10
        });
        if ('error' in events) {
            const { error } = events;
            if (error?.response?.data) {
                assert.fail(`AxiosError: ${JSON.stringify(error.response.data, null, 2)}`);
            } else if (error instanceof Error) {
                assert.fail(error);
            } else {
                assert.fail(JSON.stringify(error, null, 2));
            }
        } else {
            assert(events instanceof Array, 'response is an array');
            assert.equal(events.length, 10, 'array length is 10');
        }
    });
    it('should create one contact', async function () {
        const contact = await mp.createContact({
            firstName: 'John',
            lastName: 'Doe',
            emailAddress: `test${v4().replace(/-/g, '')}@revival.com`,
            dateOfBirth: '1999-01-01',
            company: false,
            displayName: 'Doe, John'
        });

        if ('error' in contact) {
            const { error } = contact;
            console.log(error.config);
            if (error?.response?.data) {
                assert.fail(`AxiosError: ${JSON.stringify(error.response.data, null, 2)}`);
            } else if (error instanceof Error) {
                assert.fail(error);
            } else {
                assert.fail(JSON.stringify(error, null, 2));
            }
        }
    });
});
