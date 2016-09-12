export function getUserByEmailQuery(db, email) {
  return db.users.where('email').equalsIgnoreCase(email).first();
}

export function getAllUsersQuery(db) {
  return db.users.toArray();
}

export function destroyUserQuery(db, id) {
  return db.users.where(':id').equals(id).delete();
}

export function createUserQuery(db, user) {
  return db.users.add(user);
}
