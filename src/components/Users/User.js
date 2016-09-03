import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onDelete(this.props.user);
  }

  render() {
    const { user } = this.props;

    return (
      <p>
        {user.name} ({user.email})
        <button onClick={this.onClick}>Borrar</button>
      </p>
    );
  }
}

export default User;
