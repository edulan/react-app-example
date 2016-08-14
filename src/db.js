import Dexie from 'dexie';
import { SHA512 as generateHash } from 'crypto-js';

const db = new Dexie('react-app-example');

export function migrate() {
  db.version(1).stores({
    users: 'id++,name,email,password'
  });

  db.on('populate', () => {
    db.users.add({
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
