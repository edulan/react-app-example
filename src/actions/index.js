import { action } from 'mobx';

import { session, app } from '../stores';
import { authenticateUser } from '../services';

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
