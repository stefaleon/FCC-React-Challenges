// const INCREMENT = null; // define a constant for increment action types
const INCREMENT = 'INCREMENT';
// const DECREMENT = null; // define a constant for decrement action types
const DECREMENT = 'DECREMENT';

// const counterReducer = null; // define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// const incAction = null; // define an action creator for incrementing
const incAction = () => {
  return { type: INCREMENT };
};

// const decAction = null; // define an action creator for decrementing
const decAction = () => {
  return { type: DECREMENT };
};

// const store = null; // define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);

// render the state data
const render = () => {
  const data = store.getState();
  document.body.innerText = data;
};

// subscribe the render method to the store
store.subscribe(render);

// render once with the initial state
render();

// add event listener
document.addEventListener('click', () => store.dispatch(incAction()));
