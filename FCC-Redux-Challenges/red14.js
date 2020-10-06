const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      // return;
      // return [...state, action.todo];
      return state.concat(action.todo);
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
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
