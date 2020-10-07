const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message,
  };
};

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

const connect = ReactRedux.connect;
// change code below this line

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

// ------------------------------------------

const ADD = 'ADD';

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
const Provider = ReactRedux.Provider;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
