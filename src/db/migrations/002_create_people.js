export default function(db) {
  return db.version(2).stores({
    people: 'id++,firstName,lastName,birthDate'
  });
}
