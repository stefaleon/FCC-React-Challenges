// define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';

const addMessage = (message) => {
  return { type: ADD, message };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// ------------------------------------------

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
document.addEventListener('click', () =>
  store.dispatch(addMessage('Ohai redux!'))
);
