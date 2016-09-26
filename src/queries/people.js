export function getAllPeopleQuery(db) {
  return db.people.toArray();
}

export function destroyPersonQuery(db, id) {
  return db.people.where(':id').equals(id).delete();
}

export function createPersonQuery(db, person) {
  return db.people.add(person);
}
