import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('1. has a thoughtCard class field', () => {
    const wrapper = mount(<ThoughtCard thoughts={{}}/>)

    expect(wrapper.find('.thought-card')).toBeTruthy()
  });

  it('2. has a title and body', () => {
    const wrapper = mount(<ThoughtCard thoughts={{}}/>)

    expect(wrapper.find('.thought-title')).toBeTruthy() 
    expect(wrapper.find('.thought-body')).toBeTruthy()
  });

});
