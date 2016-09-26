import db from '../db';
import {
  getUserByEmailQuery,
} from '../queries/users';

import { SHA512 as generateHash } from 'crypto-js';

export function authenticateUser({ email, password }) {
  return new Promise((resolve, reject) => {
    getUserByEmailQuery(db, email).then((user) => {
      if (user && generateHash(password).toString() === user.password) {
        resolve(user);
      }

      reject('Invalid user or password');
    });
  });
}
