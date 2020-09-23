import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const App = () => (
  <h1>Hello world!</h1>
);

function render () {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
}

render();

if (module.hot) {
  module.hot.accept('./', function() {
    render();
  });
}
