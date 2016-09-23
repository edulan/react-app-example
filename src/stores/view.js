import { observable, computed, action } from 'mobx';

import { authenticateUser } from '../services';

class ViewStore {
  @observable currentView = null;
  @observable currentUser = null;
  @observable lastError = null;

  @computed get isLoggedIn() {
    return this.currentUser !== null;
  }

  @computed get currentPath() {
    switch (this.currentView.name) {
      case 'login':
        return '/login';
      case 'users':
        return '/home';
      case 'new_user':
        return '/users/new';
      default:
        return '/login';
    }
  }

  @computed get hasErrors() {
    return this.lastError !== null;
  }

  @action doLogin(credentials) {
    return new Promise((resolve, reject) => {
      authenticateUser(credentials).then(
        action('loginSuccess', (result) => {
          this.currentUser = result;
          this.lastError = null;
          resolve(this.currentUser);
        }),
        action('loginError', (error) => {
          this.currentUser = null;
          this.lastError = error;
          reject(this.lastError);
        })
      );
    });
  }

  @action doLogout() {
    this.currentUser = null;
  }

  @action showLogin({ navigating = false } = {}) {
    this.currentView = {
      name: 'login',
      navigating,
    };
  }

  @action showUsers({ navigating = false } = {}) {
    // TODO: Add authentication
    if (!this.isLoggedIn) {
      this.showLogin({navigating});
      return;
    }

    this.currentView = {
      name: 'users',
      navigating,
    };
  }

  @action showNewUser({ navigating = false } = {}) {
    // TODO: Add authentication
    if (!this.isLoggedIn) {
      this.showLogin({navigating});
      return;
    }

    this.currentView = {
      name: 'new_user',
      navigating,
    };
  }
}

export default ViewStore;
