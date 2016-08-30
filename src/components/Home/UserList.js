import React from 'react';
import { observer } from 'mobx-react';

import User from './User';

function UserList({ users }) {
  return (
    <div>
      {users.entities.map((user) => <User key={1} user={user} />)}
    </div>
  );
}

export default observer(UserList);
