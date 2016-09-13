import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NotFound from 'components/NotFound';

describe('<NotFound/>', () => {
  it('has a link to navigate to home', () => {
    const wrapper = shallow(<NotFound/>);
    expect(wrapper.find('a')).to.have.attr('href').equal('#/home');
  });
});
