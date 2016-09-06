import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!confirm('Are you sure?')) return;

    this.props.onDelete(this.props.user);
  }

  render() {
    const { user } = this.props;

    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <Button bsStyle='danger' bsSize='small' onClick={this.onClick}>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default UserRow;
