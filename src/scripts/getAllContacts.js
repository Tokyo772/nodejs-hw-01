import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const existData = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(existData);
};

console.log(await getAllContacts());
