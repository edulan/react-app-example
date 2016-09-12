import React from 'react';
import { observable, action, computed } from 'mobx';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Users from '../src/components/Users';

chai.use(chaiEnzyme());

class DummyUsersStore {
  @observable entities;
  @observable loading;

  constructor({ entities = [], loading = false } = {}) {
    this.entities = entities;
    this.loading = loading;
  }

  @action getAll() {

  }

  @computed get isEmpty() {
    return this.entities.length === 0;
  }
}

describe('<Users/>', () => {
  it('shows loading message when loading', () => {
    const store = new DummyUsersStore({loading: true});

    const wrapper = mount(<Users users={store}/>);
    expect(wrapper.contains(<p>Loading ...</p>)).to.equal(true);
  });

  it('shows not found message if there is no user', () => {
    const store = new DummyUsersStore();

    const wrapper = mount(<Users users={store}/>);
    expect(wrapper.contains(<p>No users found</p>)).to.equal(true);
  });

  it('shows user list when there is at least one user', () => {
    const store = new DummyUsersStore({
      entities: [{id: 1, name: 'Foo', email: 'foo@example.org'}]
    });

    const wrapper = mount(<Users users={store}/>);

    expect(wrapper.contains(<td>{1}</td>)).to.equal(true);
    expect(wrapper.contains(<td>Foo</td>)).to.equal(true);
    expect(wrapper.contains(<td>foo@example.org</td>)).to.equal(true);
  });
});
