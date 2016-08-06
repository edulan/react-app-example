import React from 'react';
import ReactDOM from 'react-dom';

import bootstrap from './bootstrap';
import App from './components/App/';

import { app, session } from './stores/';

import './styles/';

bootstrap(() => {
  ReactDOM.render(
    <App app={app} session={session} />,
    document.getElementById('root')
  );
});
