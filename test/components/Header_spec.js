import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from 'components/Header';

describe('<Header/>', () => {
  it('shows login link if current section is login', () => {
    const wrapper = mount(<Header section='login'/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/login');
  });

  it('shows home link if current section is home', () => {
    const wrapper = mount(<Header section='users'/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/home');
  });

  it('shows no link if current section is unknown', () => {
    const wrapper = mount(<Header section='foo'/>);
    expect(wrapper.find('a')).to.have.length(0);
  });
});
