import React from 'react';
import { observable } from 'mobx';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from 'components/Header';

describe('<Header/>', () => {
  it('shows login link if current section is login', () => {
    const store = observable({currentView: {name: 'login'}});

    const wrapper = mount(<Header view={store}/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/login');
  });

  it('shows home link if current section is users', () => {
    const store = observable({currentView: {name: 'users'}});

    const wrapper = mount(<Header view={store}/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/home');
  });

  it('shows no link if current section is unknown', () => {
    const store = observable({currentView: {name: 'unknown'}});

    const wrapper = mount(<Header view={store}/>);
    expect(wrapper.find('a')).to.have.length(0);
  });
});
