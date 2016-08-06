import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Status from './Status';
import { doLogin, doLogout } from '../../actions/';

import './styles/';

@observer class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'foo@example.org'
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({email: event.target.value});
  }

  onClick() {
    this.performLogin();
  }

  onSubmit(event) {
    event.preventDefault();
    this.performLogin();
  }

  performLogin() {
    if (!this.props.session.loggedIn) {
      // TODO: Should Login component be responsible of navigation?
      // Should doLogin action trigger navigation to home?
      doLogin({email: this.state.email});
    } else {
      doLogout();
    }

    // this.setState({email: ''});
  }

  render() {
    const { loggedIn } = this.props.session;
    const { email } = this.state;

    return (
      <div className='Login'>
        <Status isLoggedIn={loggedIn} />
        <form onSubmit={this.onSubmit}>
          <label>Email address:</label>
          <input type='email' name='email' onChange={this.onChange} required />
        </form>
        <button onClick={this.onClick} disabled={!email}>
          {!loggedIn ? 'Login' : 'Logout'}
        </button>
      </div>
    );
  }
}

export default Login;
