import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  fs.readFile(PATH_DB, { encoding: 'UTF-8' })
    .then((data) => {
      const contacts = JSON.parse(data);
      if (contacts.length > 0) {
        contacts.pop();
        return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      }
    })
    .then(() => {
      console.log('Last contact removed.');
    })
    .catch((error) => {
      console.log('Error removing last contact:', error);
    });
};

removeLastContact();
