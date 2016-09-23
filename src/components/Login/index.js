import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Form from './Form';

@inject('view') @observer class Login extends Component {
  constructor(props) {
    super(props);

    this.performLogin = this.performLogin.bind(this);
  }

  performLogin(credentials) {
    this.props.view.doLogin(credentials)
      .then(
        () => this.props.view.showUsers(),
        () => {},
      );
  }

  render() {
    return (
      <section>
        <h3>Log in</h3>
        <Form onSubmit={this.performLogin} />
      </section>
    );
  }
}

export default Login;
