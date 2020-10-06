const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN',
  };
};

const logoutUser = () => {
  return {
    type: 'LOGOUT',
  };
};

let currentState = store.getState();
console.log('initial state, before login', currentState); // false
store.dispatch(loginUser());
currentState = store.getState();
console.log('after login', currentState); // true
store.dispatch(logoutUser());
currentState = store.getState();
console.log('after logout', currentState); // false
