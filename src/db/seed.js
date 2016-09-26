import Chance from 'chance';
import { SHA512 as generateHash } from 'crypto-js';

function getUsers() {
  return [
    {
      name: 'Foo',
      email: 'foo@example.org',
      password: generateHash('olakease').toString(),
    }
  ];
}

function getPeople() {
  const chance = new Chance();

  return Array.from({length: 100}, () => {
    return {
      firstName: chance.first(),
      lastName: chance.last(),
      birthDate: chance.birthday({string: true}),
    };
  })
}

export default function (db) {
  db.users.bulkAdd(getUsers());
  db.people.bulkAdd(getPeople());
}
