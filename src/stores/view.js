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
      default:
        return '/login';
    }
  }

  @computed get hasErrors() {
    return this.lastError !== null;
  }

  @action doLogin(credentials) {
    authenticateUser(credentials)
      .then(action((result) => {
        this.currentUser = result;
        this.currentView = {
          name: 'users',
        };
      }))
      .catch(action((error) => {
        this.currentUser = null;
        this.lastError = error;
      }));
  }

  @action doLogout() {
    this.currentUser = null;
  }

  @action showLogin() {
    console.log('showLogin');
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

    console.log('showUsers');
    this.currentView = {
      name: 'users',
    };
  }
}

export default ViewStore;
