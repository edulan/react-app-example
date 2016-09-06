import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// NOTE: Somehow extending Component is causing an error when updating state.
// With createClass is not happening anymore.
const Form = React.createClass({
  getInitialState() {
    return {
      email: 'foo@example.org',
      password: ''
    };
  },

  onChange(event) {
    if (!event.target.name) return;

    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  },

  onSubmit(event) {
    const { email, password } = this.state;

    event.preventDefault();
    this.props.onSubmit({email, password});
  },

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
});

export default Form;
