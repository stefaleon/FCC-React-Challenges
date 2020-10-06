class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // change code below this line
    let displayed;
    if (this.state.display) {
      displayed = <h1>Displayed!</h1>;
    } else {
      displayed = null;
    }
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {displayed}
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
