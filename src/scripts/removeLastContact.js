import { da } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const dataParse = JSON.parse(data);
  const newArray = dataParse.slice(0, -1);

  fs.writeFile(PATH_DB, JSON.stringify(newArray, null, 2));
};

removeLastContact();
