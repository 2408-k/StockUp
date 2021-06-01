  
import { createStore } from 'redux';

const tokenReducer = (state = { token: "" }, action) => {
  if (action.type === 'update') {
    return {
      token: action.token,
    };
  }

  return state;
};

const store = createStore(tokenReducer);

export default store;