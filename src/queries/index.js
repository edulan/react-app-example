export function getUserByEmail(db, email) {
  return db.users.where('email').equalsIgnoreCase(email).first();
}

export function getAllUsers(db) {
  return db.users.toArray();
}

export function destroyUser(db, id) {
  return db.users.where(':id').equals(id).delete();
}
