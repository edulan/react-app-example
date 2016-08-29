import { observable, useStrict } from 'mobx';

// Force strict mode so mutations are only allowed within actions.
useStrict(true);

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
