import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import bootstrap from './bootstrap';
import stores from './stores/';

import App from './components/App/';

bootstrap(() => {
  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
