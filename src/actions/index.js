import { action } from 'mobx';

import { session, app, users } from '../stores';
import { authenticateUser, fetchUsers } from '../services';

import { setRoute } from '../router';
import { getHomeUrl } from '../routes';

export const doLogin = action('doLogin', (credentials) => {
  authenticateUser(credentials)
    .then(action((result) => {
      session.loggedIn = true;
      session.currentUser = result;
    }))
    .then(() => {
      setRoute(getHomeUrl());
    })
    .catch(action(() => {
      session.loggedIn = false;
      session.currentUser = {};
    }));
});

export const doLogout = action('doLogin', () => {
  session.loggedIn = false;
  session.currentUser = {};
});

export const navigateTo = action('navigateTo', (path) => {
  app.section = path;
});

export const getUsers = action('getUsers', () => {
  users.loading = true;

  // NOTE: Simulate a bit of delay when querying DB
  setTimeout(() => {
    fetchUsers()
      .then(action((result) => {
        users.entities.replace(result);
        users.loading = false;
      }))
      .catch(action(() => {
        users.entities.clear();
        users.loading = false;
      }));
  }, 1000);
});
