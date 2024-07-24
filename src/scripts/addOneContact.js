import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const addContact = Array.from({ length: 1 }, createFakeContact);
  const existData = await fs.readFile(PATH_DB, 'utf-8');
  const newData = [...JSON.parse(existData), ...addContact];
  await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2));
};

addOneContact();
