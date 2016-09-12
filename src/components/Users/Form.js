import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// NOTE: Somehow extending Component is causing an error when updating state.
// With createClass is not happening anymore.
const Form = React.createClass({
  getInitialState() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },

  onChange(event) {
    if (!event.target.name) return;

    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  },

  onSubmit(event) {
    const {  name, email, password } = this.state;

    event.preventDefault();
    this.props.onSubmit({ name, email, password});
  },

  render() {
    return (
      <form acceptCharset="UTF-8" role="form" onSubmit={this.onSubmit}>
        <FormGroup>
          <ControlLabel htmlFor="name">Name</ControlLabel>
          <FormControl
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.onChange}
            required
          />
        </FormGroup>
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
          value="Create"
        />
      </form>
    );
  }
});

export default Form;
