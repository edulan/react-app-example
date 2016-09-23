import React from 'react';
import DevTools, { setLogEnabled } from 'mobx-react-devtools';

import Alert from './Alert';
import Header from '../Header/';
import SectionManager from '../SectionManager/';

function renderDevTools() {
  if (process.env.NODE_ENV !== 'development') return null;

  setLogEnabled(true);

  return <DevTools position={{top: 72, right: 20}} />;
}

/**
 * App component acts as the application layout.
 */
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main role="main">
        <Alert />
        <SectionManager />
      </main>
      {renderDevTools()}
    </div>
  );
}

export default App;
