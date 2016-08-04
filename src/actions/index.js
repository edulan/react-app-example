import { session } from '../stores';
import { authenticateUser } from '../services';

export function doLogin({ email }) {
  authenticateUser({ email })
    .then((result) => {
      session.loggedIn = true;
      session.currentUser = result;
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
