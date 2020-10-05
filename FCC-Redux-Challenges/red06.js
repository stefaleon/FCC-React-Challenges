const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type === 'LOGIN') {
    return { ...state, login: true };
  } else {
    return state;
  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN',
  };
};

let currentState = store.getState();
console.log(currentState);
store.dispatch(loginAction());
currentState = store.getState();
console.log(currentState);
