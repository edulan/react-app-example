import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!confirm('Are you sure?')) return;

    this.props.onDelete(this.props.person);
  }

  render() {
    const { person } = this.props;

    return (
      <tr>
        <td>{person.id}</td>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.birthDate}</td>
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
