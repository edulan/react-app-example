import Dexie from 'dexie';
import { SHA512 as generateHash } from 'crypto-js';

const db = new Dexie('react-app-example');

export function migrate() {
  db.version(1).stores({
    users: 'name,email,password'
  });

  db.version(2).upgrade(() => {
    // Will only be executed if a version below 2 was installed.
    return db.users.add({
      name: 'Foo',
      email: 'foo@example.org',
      password: generateHash('olakease').toString(),
    });
  });

  return db.open().catch(function (e) {
    console.error(`DB open failed: ${e}`);
  });
}

export default db;
