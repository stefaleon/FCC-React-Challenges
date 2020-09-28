'use strict';

const JSX = <h1>Hello JSX!</h1>;

const MyComponent = () => {
  return JSX;
};

const domContainer = document.querySelector('#container');
ReactDOM.render(<MyComponent />, domContainer);
