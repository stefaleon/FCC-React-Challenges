const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp',
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      // return;
      return Object.assign({}, state, { status: 'online' });
    // OR
    // return { ...state, status: 'online' };
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE',
  };
};

const store = Redux.createStore(immutableReducer);

// render the state data
const render = () => {
  const data = store.getState();
  document.body.innerText = `User ${data.user}'s status is ${data.status}`;
};

// subscribe the render method to the store
store.subscribe(render);

// render once with the initial state
render();

// add event listener
document.addEventListener('click', () => store.dispatch(wakeUp()));
