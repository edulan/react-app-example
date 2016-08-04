export function getUserByEmail(db, email) {
  return db.users.where('email').equalsIgnoreCase(email).first();
}
