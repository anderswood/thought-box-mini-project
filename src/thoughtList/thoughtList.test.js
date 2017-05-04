import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('1. has a thought-list class field', () => {
    const wrapper = mount(<ThoughtList thoughtList={[]}/>)
    const expectedClass = wrapper.find('.thought-list')

    expect(expectedClass.length).toBe(1)
  });

  it('2. has multiple ThoughtCard class fields', () => {
    const newIdeas = [
      {title: 'title1', body: 'body1'},
      {title: 'title2', body: 'body2'},
      {title: 'title3', body: 'body3'},
    ]

    const wrapper = mount(<ThoughtList thoughtList={newIdeas}/>)

    expect(wrapper.find('.thought-card').length).toBe(3)
  });

  //new test: when thoughtlist receives empty array of thoughts, zero cards display
  //new test:

});
