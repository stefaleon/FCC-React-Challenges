// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: [],
//     };
//   }

//   // add handleChange() and submitMessage() methods here
//   handleChange = (e) => {
//     this.setState({ input: e.target.value });
//   };

//   submitMessage = async () => {
//     await this.setState({
//       messages: [...this.state.messages, this.state.input],
//       input: '',
//     });
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         {/* render an input, button, and ul here */}
//         <input onChange={this.handleChange} value={this.state.input} />
//         <button onClick={this.submitMessage}>Add message</button>
//         <ul>
//           {this.state.messages.map((message, index) => (
//             <li key={index}>{message}</li>
//           ))}
//         </ul>

//         {/* change code above this line */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<DisplayMessages />, document.getElementById('container'));

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: '',
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* render an input, button, and ul here */}
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>

        {/* change code above this line */}
      </div>
    );
  }
}

ReactDOM.render(<DisplayMessages />, document.getElementById('container'));
