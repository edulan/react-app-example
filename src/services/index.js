import db from '../db';
import {
  getUserByEmailQuery,
  getAllUsersQuery,
  getUsersByQuery,
  destroyUserQuery,
  createUserQuery,
} from '../queries/';

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

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    getAllUsersQuery(db).then((users) => {
      if (!users) {
        reject();
      }

      resolve(users);
    });
  });
}

export function searchUsers(criteria) {
  return new Promise((resolve, reject) => {
    getUsersByQuery(db, criteria).then((users) => {
      if (!users) {
        reject();
      }

      resolve(users);
    });
  });
}

export function destroyUser(id) {
  return new Promise((resolve, reject) => {
    destroyUserQuery(db, id).then((deleteCount) => {
      if (deleteCount === 0) {
        reject();
      }

      resolve();
    });
  });
}

export function createUser(user) {
  return new Promise((resolve, reject) => {
    createUserQuery(db, user).then((lastIndex) => {
      // TODO: Review condition
      if (!lastIndex) {
        reject();
      }

      resolve();
    });
  });
}
