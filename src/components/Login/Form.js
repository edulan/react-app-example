import React, { Component } from 'react';


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
        <div className="form-group">
          <label>Email</label>
          <input type="email" id="user_email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" id="user_password" name="password" className="form-control" onChange={this.onChange} required />
        </div>
        <input type="submit" className="btn btn-primary pull-right" value="Login" />
      </form>
    );
  }
}

export default Form;
