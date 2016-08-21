import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Header from '../src/components/Header';

chai.use(chaiEnzyme());

describe('<Header/>', () => {
  it('shows login link if current section is login', () => {
    const wrapper = mount(<Header section='login'/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/login');
  });

  it('shows home link if current section is home', () => {
    const wrapper = mount(<Header section='home'/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/home');
  });

  it('shows no link if current section is unknown', () => {
    const wrapper = mount(<Header section='foo'/>);
    expect(wrapper.find('a')).to.have.length(0);
  });
});
