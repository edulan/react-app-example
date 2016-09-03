import { observable, computed, action } from 'mobx';
import { fetchUsers, deleteUser } from '../services';

class UsersStore {
  @observable entities = [];
  @observable loading = false;

  @action getAll() {
    this.loading = true;

    fetchUsers()
      .then(action((result) => {
        this.entities.replace(result);
        this.loading = false;
      }))
      .catch(action((error) => {
        this.loading = false;
      }));
  }

  @computed get isEmpty() {
    return this.entities.length === 0;
  }

  @action destroy(user) {
    deleteUser(user.id)
      .then(action(() => {
        this.entities.remove(user);
      }))
      .catch(() => {
        console.warn('Cannot delete user');
      })
  }
}

export default UsersStore;
