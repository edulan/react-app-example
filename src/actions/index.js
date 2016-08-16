import { session, app, users } from '../stores';
import { authenticateUser, fetchUsers } from '../services';

import { setRoute } from '../router';
import { getHomeUrl } from '../routes';

export function doLogin(credentials) {
  authenticateUser(credentials)
    .then((result) => {
      session.loggedIn = true;
      session.currentUser = result;
    })
    .then(() => {
      setRoute(getHomeUrl());
    })
    .catch(() => {
      session.loggedIn = false;
      session.currentUser = {};
    });
}

export function doLogout() {
  session.loggedIn = false;
  session.currentUser = {};
}

export function navigateTo(path) {
  app.section = path;
}

export function getUsers() {
  users.loading = true;

  // NOTE: Simulate a bit of delay when querying DB
  setTimeout(() => {
    fetchUsers()
      .then((result) => {
        users.entities.replace(result);
        users.loading = false;
      })
      .catch(() => {
        users.entities.clear();
        users.loading = false;
      });
  }, 1000);
}
