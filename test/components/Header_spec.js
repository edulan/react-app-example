import React from 'react';
import { observable } from 'mobx';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from 'components/Header';

describe('<Header/>', () => {
  it('shows login link if current user is no logged in', () => {
    const store = observable({isLoggedIn: false});

    const wrapper = mount(<Header view={store}/>);
    expect(wrapper.find('[href="#/login"]')).to.have.length(1);
  });

  it('shows home link if current user is logged in', () => {
    const store = observable({isLoggedIn: true});

    const wrapper = mount(<Header view={store}/>);
    expect(wrapper.find('[href="#/home"]')).to.have.length(1);
  });

  it('shows logout button if current user is logged in', () => {
    const store = observable({isLoggedIn: true});

    const wrapper = mount(<Header view={store}/>);
    expect(wrapper.find('button').text()).to.eq('Logout');
  });
});
