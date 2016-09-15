import { observable, computed, action } from 'mobx';
import { SHA512 as generateHash } from 'crypto-js';
import { fetchUsers, searchUsers, createUser, destroyUser } from '../services';

class UsersStore {
  @observable entities = [];
  @observable loading = false;

  @action getAll() {
    this.loading = true;

    fetchUsers()
      .then(action('fetchSuccess', (result) => {
        this.entities.replace(result);
        this.loading = false;
      }))
      .catch(action('fetchError', (error) => {
        debugger;
        this.loading = false;
      }));
  }

  @action getBy(criteria) {
    searchUsers(criteria)
      .then(action('searchSuccess', (result) => {
        this.entities.replace(result);
        this.loading = false;
      }))
      .catch(action('searchError', (error) => {
        this.loading = false;
      }));
  }

  @computed get isEmpty() {
    return this.entities.length === 0;
  }

  @action create(user) {
    const extendedUser = {
      ...user,
      password: generateHash(user.password).toString(),
    };

    return createUser(extendedUser)
      .then(action('createSuccess', () => {
        this.entities.push(extendedUser);
      }))
      .catch(() => {
        console.warn('Cannot create user');
      })
  }

  @action destroy(user) {
    destroyUser(user.id)
      .then(action('destroySuccess', () => {
        this.entities.remove(user);
      }))
      .catch(() => {
        console.warn('Cannot delete user');
      })
  }
}

export default UsersStore;
