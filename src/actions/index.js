import { session, app } from '../stores';
import { authenticateUser } from '../services';

export function doLogin({ email }) {
  authenticateUser({ email })
    .then((result) => {
      session.loggedIn = true;
      session.currentUser = result;
    })
    .then(() => {
      navigateTo('home');
    })
    .catch(() => {
      console.warn('User not found!');
      session.loggedIn = false;
      session.currentUser = {};
    });
}

export function doLogout() {
  session.loggedIn = false;
  session.currentUser = {};
}

export function navigateTo(path) {
  console.log('Navigating to ', path);
  app.section = path;
}
