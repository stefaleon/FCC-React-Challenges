class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('Component will mount...');
  }
  render() {
    return <div />;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
