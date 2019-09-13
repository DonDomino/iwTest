import React from 'react';
import Posts from '../components/Posts';
import { shallow, render } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('renders without crashing', () => {
  const store = mockStore({posts: []});
  shallow(<Posts store={store} />);
});

it('renders posts', () => {
  const store = mockStore({ posts: [{ user: {name: 'Poster 1'}, created_at:'Today', Text: 'Post 1' }] });
  const wrapper =  render(<Posts store={store} />);
  expect(wrapper.find('.postWrapper').length).toBe(1);
});