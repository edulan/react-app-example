import React from 'react';
import ReactDOM from 'react-dom';

import bootstrap from './bootstrap';
import App from './components/App/';
import { session } from './stores/';

import './styles/';

bootstrap(() => {
  ReactDOM.render(
    <App session={session} />,
    document.getElementById('root')
  );
});
