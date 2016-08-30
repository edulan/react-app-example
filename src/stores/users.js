import { observable, computed, action } from 'mobx';
import { fetchUsers } from '../services';

class Users {
  @observable entities = [];
  @observable loading = false;

  @action getAll() {
    this.loading = true;

    // NOTE: Simulate a bit of delay when querying DB
    setTimeout(() => {
      fetchUsers()
        .then(action((result) => {
          this.entities.replace(result);
          this.loading = false;
        }))
        .catch(action((error) => {
          this.loading = false;
        }));
    }, 1000);
  }

  @computed get isEmpty() {
    return this.entities.length === 0;
  }
}

export default Users;
