import React from 'react';

export default ({ isLoggedIn }) => {
  const styles = isLoggedIn ? {color: 'green'} : {color: 'gray'};

  return (
    <h1 style={styles}>
      {isLoggedIn ? 'Logged in' : 'Not logged in'}
    </h1>
  );
};
