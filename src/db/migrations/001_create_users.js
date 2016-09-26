export default function(db) {
  return db.version(1).stores({
    users: 'id++,name,email,password'
  });
}
