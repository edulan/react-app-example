import db from '../db';
import { getUserByEmail, getAllUsers } from '../queries/';

import { SHA512 as generateHash } from 'crypto-js';

export function authenticateUser({ email, password }) {
  return new Promise((resolve, reject) => {
    getUserByEmail(db, email).then((user) => {
      if (user && generateHash(password).toString() === user.password) {
        resolve(user);
      }

      reject('Invalid user or password');
    });
  });
}

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    getAllUsers(db).then((users) => {
      if (!users) {
        reject();
      }

      resolve(users);
    });
  });
}
