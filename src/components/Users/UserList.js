import React from 'react';
import { observer } from 'mobx-react';
import { Table } from 'react-bootstrap';

import UserRow from './UserRow';

function UserList({ users }) {
  const onDelete = (user) => this.props.users.destroy(user);

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.entities.map((user) => {
          return (
            <UserRow
            key={user.id}
            user={user}
            onDelete={onDelete}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default observer(UserList);
