import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
  
  if(action.type === 'SET_POSTS') {
    return {
      ...state,
      posts: action.payload,
      loading: false
    };
  }  
  return state;
} 

export default createStore(reducer, { posts: [], loading: true }, applyMiddleware(thunk));