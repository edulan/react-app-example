import { observable } from 'mobx';

export const session = observable({
  loggedIn: false,
  currentUser: {},
});
