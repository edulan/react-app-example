export function getUserByEmail(db, email) {
  return db.users.where('email').equalsIgnoreCase(email).first();
}

export function getAllUsers(db) {
  return db.users.toArray();
}
