import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  fs.writeFile(PATH_DB, JSON.stringify([], null, 2))
    .then(() => {
      console.log('All contacts removed.');
    })
    .catch((error) => {
      console.log('Error removing all contacts:', error);
    });
};

removeAllContacts();
