const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      // don't mutate state here or the tests will fail
      // return;
      // return state.slice(0, action.index).concat(state.slice(action.index + 1));
      // OR
      // return [
      //   ...state.slice(0, action.index),
      //   ...state.slice(action.index + 1, state.length),
      // ];
      // OR
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index,
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
document.addEventListener('click', () => store.dispatch(removeItem(2)));
