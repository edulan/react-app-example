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
    authenticateUser(credentials)
      .then(action('loginSuccess', (result) => {
        this.currentUser = result;
        this.currentView = {
          name: 'users',
        };
        this.lastError = null;
      }))
      .catch(action('loginError', (error) => {
        this.currentUser = null;
        this.lastError = error;
      }));
  }

  @action doLogout() {
    this.currentUser = null;
  }

  @action showLogin() {
    this.currentView = {
      name: 'login',
    };
  }

  @action showUsers() {
    // TODO: Add authentication
    if (!this.isLoggedIn) {
      this.showLogin();
      return;
    }

    this.currentView = {
      name: 'users',
    };
  }

  @action showNewUser() {
    // TODO: Add authentication
    if (!this.isLoggedIn) {
      this.showLogin();
      return;
    }

    this.currentView = {
      name: 'new_user',
    };
  }
}

export default ViewStore;
