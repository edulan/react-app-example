import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'foo@example.org',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    if (!event.target.name) return;

    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    const { email, password } = this.state;

    event.preventDefault();
    this.props.onSubmit({email, password});
  }

  render() {
    return (
      <form acceptCharset="UTF-8" role="form" onSubmit={this.onSubmit}>
        <h3>Log in</h3>
        <FormGroup>
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <FormControl
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <FormControl
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormControl
          type="submit"
          bsClass="form-control btn btn-primary"
          value="Login"
        />
      </form>
    );
  }
}

export default Form;
