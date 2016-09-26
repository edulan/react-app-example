import Dexie from 'dexie';
import migrations from './migrations';
import seed from './seed';

const db = new Dexie('react-app-example');

export function migrateDb() {
  return new Promise((resolve, reject) => {
    // Setup migrations
    migrations.forEach((migrate) => migrate(db));
    // Populate DB with seed data (will be run only once!)
    db.on('populate', () => seed(db));

    db.open()
      .then(() => resolve())
      .catch((e) => reject(e));
  });
}

export default db;
