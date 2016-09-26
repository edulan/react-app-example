import { observable, computed, action } from 'mobx';

import { authenticateUser } from '../services';

class ViewStore {
  @observable currentView = {};
  @observable currentUser = null;
  @observable lastError = null;

  @action resetState({ currentView = {}, currentUser = null }) {
    this.currentView = currentView;
    this.currentUser = currentUser;
  }

  serialize() {
    return {
      currentView: this.currentView,
      currentUser: this.currentUser,
    };
  }

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
    return Promise.resolve().then(
      action('logoutSuccess' ,() => {
        this.currentUser = null;
      })
    );
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
