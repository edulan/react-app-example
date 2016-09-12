import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

import Header from '../Header/';
import Login from '../Login/';
import Users from '../Users/';
import UsersNew from '../Users/New';
import NotFound from '../NotFound/';

const viewMap = {
  login: Login,
  users: Users,
  new_user: UsersNew,
};

/**
 * App component acts as the application layout.
 */
@inject('view') @observer class App extends Component {
  renderHeader({ name }) {
    return <Header section={name} />;
  }

  renderErrors() {
    if (!this.props.view.hasErrors) return null;

    return (
      <section>
        <Alert bsStyle='danger'>
          <p>{this.props.view.lastError}</p>
        </Alert>
      </section>
    );
  }

  renderCurrentView({ name }) {
    const View = viewMap[name] || NotFound;

    return <View />;
  }

  render() {
    const { view } = this.props;

    return (
      <div>
        <header>
          {this.renderHeader(view.currentView)}
        </header>
        <main role="main">
          {this.renderErrors()}
          {this.renderCurrentView(view.currentView)}
        </main>
      </div>
    );
  }
}

export default App;
