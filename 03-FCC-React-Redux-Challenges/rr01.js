class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
  }

  render() {
    return <div />;
  }
}

ReactDOM.render(<DisplayMessages />, document.getElementById('container'));
