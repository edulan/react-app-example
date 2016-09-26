import { observable, computed, action } from 'mobx';
import { fetchPeople, createPerson, destroyPerson } from '../services/people';

class PeopleStore {
  @observable entities = [];
  @observable loading = false;

  @action getAll() {
    this.loading = true;

    fetchPeople()
      .then(action('fetchSuccess', (result) => {
        this.entities.replace(result);
        this.loading = false;
      }))
      .catch(action('fetchError', (error) => {
        this.loading = false;
      }));
  }

  @computed get isEmpty() {
    return this.entities.length === 0;
  }

  @action create(person) {
    return createPerson(person)
      .then(action('createSuccess', () => {
        this.entities.push(person);
      }))
      .catch(() => {
        console.warn('Cannot create person');
      })
  }

  @action destroy(person) {
    destroyPerson(person.id)
      .then(action('destroySuccess', () => {
        this.entities.remove(person);
      }))
      .catch(() => {
        console.warn('Cannot delete person');
      })
  }
}

export default PeopleStore;
