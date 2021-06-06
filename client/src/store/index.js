  
import { createStore } from 'redux';

const tokenReducer = (state = { token: "",auth: 0 }, action) => {
  if (action.type === 'update') {
    return {
      token: action.token,
      auth: state.auth
    };
  }
  if (action.type === 'login')
  {
    return {
      token: state.token,
      auth: 1
    };
  }
  if (action.type === 'logout')
  {
    return {
      token: "",
      auth: 0
    };
  }

  return state;
};

const store = createStore(tokenReducer);

export default store;