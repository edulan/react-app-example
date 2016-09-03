import React from 'react';
import { observer } from 'mobx-react';

import User from './User';

function UserList({ users }) {
  const onDelete = (user) => this.props.users.destroy(user);

  return (
    <div>
      {users.entities.map((user) => {
        return (
          <User
            key={1}
            user={user}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default observer(UserList);
