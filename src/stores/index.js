import { observable } from 'mobx';

export const session = observable({
  loggedIn: false,
  currentUser: {},
});

export const app = observable({
  // Default section
  section: 'login',
});

export const users = observable({
  entities: [],
  loading: false,
});

export default {
  app,
  session,
  users,
};
