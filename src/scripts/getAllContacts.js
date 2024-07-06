import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  fs.readFile(PATH_DB, { encoding: 'Utf-8' })
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log(contacts);
    })
    .catch((error) => {
      console.log('Error getting contacts:', error);
    });
};

console.log(await getAllContacts());
