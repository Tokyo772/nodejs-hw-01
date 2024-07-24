import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, createFakeContact);
  const existData = await fs.readFile(PATH_DB, 'utf-8');
  const newData = [...JSON.parse(existData), ...newContacts];
  await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2));
};

generateContacts(2);
