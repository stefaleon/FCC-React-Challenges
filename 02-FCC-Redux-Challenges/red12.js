const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function (dispatch) {
    // dispatch request action here
    dispatch(requestingData());
    currentState = store.getState();
    console.log('after dispatching requestingData', currentState);
    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice'],
      };
      // dispatch received data action here
      dispatch(receivedData(data));
      currentState = store.getState();
      console.log('after dispatching receivedData', currentState);
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

let currentState = store.getState();
console.log('initial state', currentState);
store.dispatch(handleAsync());
