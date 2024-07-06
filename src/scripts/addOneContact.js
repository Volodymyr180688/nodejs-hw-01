import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  fs.readFile(PATH_DB, { encoding: 'UTF-8' })
    .then((data) => {
      const contacts = JSON.parse(data);
      contacts.push(createFakeContact());
      return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    })
    .then(() => {
      console.log('One contact added.');
    })
    .catch((error) => {
      console.error('Error adding contact:', error);
    });
};

addOneContact();
