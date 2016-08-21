import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import NotFound from '../src/components/NotFound';

chai.use(chaiEnzyme());

describe('<NotFound/>', () => {
  it('has a link to navigate to home', () => {
    const wrapper = shallow(<NotFound/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/home');
  });
});
