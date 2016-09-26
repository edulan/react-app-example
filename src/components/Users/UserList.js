import React from 'react';
import { observer } from 'mobx-react';
import { Table } from 'react-bootstrap';

import UserRow from './UserRow';

function UserList({ people }) {
  const onDelete = (person) => this.props.people.destroy(person);

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Birth day</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {people.entities.map((person) => {
          return (
            <UserRow
            key={person.id}
            person={person}
            onDelete={onDelete}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default observer(UserList);
