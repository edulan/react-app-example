import db from '../db';
import {
  getAllPeopleQuery,
  destroyPersonQuery,
  createPersonQuery,
} from '../queries/people';

export function fetchPeople() {
  return new Promise((resolve, reject) => {
    getAllPeopleQuery(db).then((people) => {
      if (!people) {
        reject();
      }

      resolve(people);
    });
  });
}

export function destroyPerson(id) {
  return new Promise((resolve, reject) => {
    destroyPersonQuery(db, id).then((deleteCount) => {
      if (deleteCount === 0) {
        reject();
      }

      resolve();
    });
  });
}

export function createPerson(person) {
  return new Promise((resolve, reject) => {
    createPersonQuery(db, person).then((lastIndex) => {
      // TODO: Review condition
      if (!lastIndex) {
        reject();
      }

      resolve();
    });
  });
}
