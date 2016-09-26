import React from 'react';
import { observable, action, computed } from 'mobx';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Users from 'components/Users';

class DummyPeopleStore {
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
    const store = new DummyPeopleStore({loading: true});

    const wrapper = mount(<Users people={store}/>);
    expect(wrapper.contains(<p>Loading ...</p>)).to.equal(true);
  });

  it('shows not found message if there is no user', () => {
    const store = new DummyPeopleStore();

    const wrapper = mount(<Users people={store}/>);
    expect(wrapper.contains(<p>No users found</p>)).to.equal(true);
  });

  it('shows user list when there is at least one user', () => {
    const store = new DummyPeopleStore({
      entities: [{id: 1, firstName: 'Foo', lastName: 'Bar'}]
    });

    const wrapper = mount(<Users people={store}/>);

    expect(wrapper.contains(<td>{1}</td>)).to.equal(true);
    expect(wrapper.contains(<td>Foo</td>)).to.equal(true);
    expect(wrapper.contains(<td>Bar</td>)).to.equal(true);
  });
});
