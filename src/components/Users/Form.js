import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// NOTE: Somehow extending Component is causing an error when updating state.
// With createClass is not happening anymore.
const Form = React.createClass({
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      birthDate: '',
    };
  },

  onChange(event) {
    if (!event.target.name) return;

    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  },

  onSubmit(event) {
    const {  firstName, lastName, birthDate } = this.state;

    event.preventDefault();
    this.props.onSubmit({firstName, lastName, birthDate});
  },

  render() {
    return (
      <form acceptCharset="UTF-8" role="form" onSubmit={this.onSubmit}>
        <FormGroup>
          <ControlLabel htmlFor="firstName">First name</ControlLabel>
          <FormControl
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={this.state.firstName}
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="lastName">Last name</ControlLabel>
          <FormControl
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={this.state.lastName}
            onChange={this.onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="birthDate">Birth day</ControlLabel>
          <FormControl
            id="birthDate"
            type="date"
            name="birthDate"
            placeholder="Enter your birth day"
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
