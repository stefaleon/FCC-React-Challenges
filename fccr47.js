class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

// change code below this line
ReactDOMServer.renderToString(<App />);

// Server-only. This API is not available in the browser.
// https://reactjs.org/docs/react-dom-server.html#rendertonodestream
