import { SHA512 as generateHash } from 'crypto-js';

export default function (db) {
  return db.users.add({
    name: 'Foo',
    email: 'foo@example.org',
    password: generateHash('olakease').toString(),
  });
}
