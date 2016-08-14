import React from 'react';
import ReactDOM from 'react-dom';

import bootstrap from './bootstrap';
import App from './components/App/';

import { app, session, users } from './stores/';

bootstrap(() => {
  ReactDOM.render(
    <App app={app} session={session} users={users} />,
    document.getElementById('root')
  );
});
