import { observable, useStrict } from 'mobx';

import Users from './users';

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

export const users = new Users();
