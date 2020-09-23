import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from './components/layout';
import './index.css';

const App = () => (
  <Layout
    title="RelativeCI examples"
  >
    Examples
  </Layout>
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
