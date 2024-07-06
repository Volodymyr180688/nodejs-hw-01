import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  fs.readFile(PATH_DB, { encoding: 'UTF-8' })
    .then((data) => {
      const contacts = JSON.parse(data);
      for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
      }
      return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    })
    .then(() => {
      console.log(`${number} contacts generated.`);
    })
    .catch((error) => {
      console.log(`Error generating contacts:`, error);
    });
};

generateContacts(5);
