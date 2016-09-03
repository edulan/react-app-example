import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Status from './Status';
import Form from './Form';

@inject('view') @observer class Login extends Component {
  constructor(props) {
    super(props);

    this.performLogin = this.performLogin.bind(this);
  }

  performLogin(credentials) {
    this.props.view.doLogin(credentials);
  }

  render() {
    const { isLoggedIn } = this.props.view;

    return (
      <section>
        <Status isLoggedIn={isLoggedIn} />
        <Form onSubmit={this.performLogin} />
      </section>
    );
  }
}

export default Login;
