import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  fs.readFile(PATH_DB, { encoding: 'UTF-8' })
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log(contacts.length);
    })
    .catch((error) => {
      console.log('Error counting contacts:', error);
    });
};

console.log(await countContacts());
