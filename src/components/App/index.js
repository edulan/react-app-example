import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../Header/';
import Login from '../Login/';
import Home from '../Home/';
import NotFound from '../NotFound/';

const sectionMap = {
  login: Login,
  home: Home,
};

/**
 * App component acts as the application layout.
 */
@inject('app') @observer class App extends Component {
  renderHeader(sectionName) {
    return <Header section={sectionName} />;
  }

  renderSection(sectionName) {
    const Section = sectionMap[sectionName] || NotFound;

    // TODO: Delegate section rendering to a section manager component
    return <Section />;
  }

  render() {
    const { section } = this.props.app;

    return (
      <div>
        <header>
          {this.renderHeader(section)}
        </header>
        <main role="main">
          {this.renderSection(section)}
        </main>
      </div>
    );
  }
}

export default App;
