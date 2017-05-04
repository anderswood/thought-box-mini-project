import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('1. renders App with className app', () => {
  const wrapper = mount(<App/>)

  expect(wrapper.find('.app')).toBeTruthy()
});

it('2. initial state starts with an empty array', () => {
  const wrapper = mount(<App/>)

  expect(wrapper.state().thoughts).toEqual([])
});

it('3. having 2 thoughts in state should mean there are two thoughtCards', () => {
  const wrapper = mount(<App/>)
  wrapper.setState({thoughts: [
      {title: 'title1', body:'body1'},
      {title: 'title2', body:'body2'}
    ]
  })

  expect(wrapper.find('.thought-card').length).toEqual(2)
});

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
  const wrapper = mount(<App />)
  wrapper.setState({thoughts: [
      {title: 'title1', body:'body1'},
      {title: 'title2', body:'body2'}
    ]
  })

  const inputTitle = wrapper.find('input').first()
  const inputBody = wrapper.find('input').last()
  const buttonSubmit = wrapper.find('button')

  inputTitle.simulate('change', { target: { value: 'title3' } });
  inputBody.simulate('change', { target: { value: 'body3' } });
  buttonSubmit.simulate('click')

  expect(wrapper.find('.thought-card').length).toEqual(3)
});
