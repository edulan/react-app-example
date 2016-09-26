export function getUserByEmailQuery(db, email) {
  return db.users.where('email').equalsIgnoreCase(email).first();
}
