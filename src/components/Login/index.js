import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Status from './Status';
import Form from './Form';
import { doLogin } from '../../actions/';

@inject('session') @observer class Login extends Component {
  constructor(props) {
    super(props);

    this.performLogin = this.performLogin.bind(this);
  }

  performLogin(credentials) {
    doLogin(credentials);
  }

  render() {
    const { loggedIn } = this.props.session;

    return (
      <section>
        <Status isLoggedIn={loggedIn} />
        <Form onSubmit={this.performLogin} />
      </section>
    );
  }
}

export default Login;
