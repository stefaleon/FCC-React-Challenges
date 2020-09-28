'use strict';

const JSX = (
  <div>
    <h1>Hello JSX!</h1>
    <p>This is the paragraph</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
);

const MyComponent = () => {
  return JSX;
};

const domContainer = document.querySelector('#container');
ReactDOM.render(<MyComponent />, domContainer);
