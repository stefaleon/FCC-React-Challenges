'use strict';

const MyComponent = () => {
  return <h1>Hello FCC React!</h1>;
};

const domContainer = document.querySelector('#container');
ReactDOM.render(<MyComponent />, domContainer);
