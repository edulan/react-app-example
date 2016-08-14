import React from 'react';

export default ({ user }) => {
  return (
    <p>{user.name} ({user.email})</p>
  );
};
