const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      // don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo,
  };
};

const store = Redux.createStore(immutableReducer);

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
  store.dispatch(addToDo('Test this code'))
);
