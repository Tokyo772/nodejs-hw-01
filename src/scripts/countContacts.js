import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  const existData = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(existData).length;
};

console.log(await countContacts());
