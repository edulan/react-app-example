import db from '../db';
import { getUserByEmail } from '../queries/';

export function authenticateUser({ email }) {
  return new Promise((resolve, reject) => {
    getUserByEmail(db, email).then((user) => {
      if (!user) {
        reject();
      }

      // TODO: Check whether user password match the given one

      resolve(user);
    });
  });
}
